'use client'
import { chatContextType } from "@/types";
import { endpoints } from "@/utils/endpoints";
import React, { useState, createContext, useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

export const socketContext = createContext<chatContextType | null>(null);

const socketProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {
  const [chat, setChat] = useState<string[]>([]);
  const [message, setMessage] = useState<string>();
  const socketRef = useRef<Socket | null>(null);

  
  useEffect(()=>{
      const socket = io (endpoints.socketEndpoint);
      socketRef.current = socket;
      
      socket.on ("chat", (payload)=>{
          const chats = [...chat, payload];
          setChat (chats);
      })
    return ()=>{
        socket.disconnect();
        socketRef.current = null;
    }
  });

  useEffect (()=>{
    if (message && socketRef.current) socketRef.current.emit ('chat', message);
  }, [message]);
  

  return (
    <>
      <socketContext.Provider value={{chat, setMessage}}>
        {children}
      </socketContext.Provider>
    </>
  );

};

export default socketProvider;
