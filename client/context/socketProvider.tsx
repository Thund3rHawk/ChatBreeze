'use client'
import useUserChat from "@/hooks/useUserChat";
import { chatContextType } from "@/types";
import { endpoints } from "@/utils/endpoints";
import { getCookiesData } from "@/utils/getCookiesData";
import React, { useState, createContext, useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

export const socketContext = createContext<chatContextType | null>(null);




const socketProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {
  const [chat, setChat] = useState<string[]>([]);
  const [message, setMessage] = useState<string>();
  const socketRef = useRef<Socket | null>(null);
  
  // Have to use this userid for making the specific chatroom for one to one connection
  const {userId} = useUserChat();
  
  useEffect(()=>{
      const socket = io (endpoints.socketEndpoint,{
        autoConnect: false
      });
      socketRef.current = socket;
      async function getSenderId(){
        try{
          const senderId = await getCookiesData();
          socket.connect();
          socket.emit ('join', userId);
          // socket.emit ('join', senderId);


          socket.emit ('newChat', {receiverId: senderId,senderId: userId,message: message});
          
          socket.on ('newChat',(payload)=>{
            // const {receiverId, message} = payload
            console.log (`sender id is ${payload.receiverId} reciever id is ${payload.senderId} and message is: ${payload.message}`)
            const chats = [...chat,payload.message];              
            setChat (chats);
          });

        }
        catch(e){
          console.log ("Socker Client side error:", e);
        }
      }

      getSenderId();

      // have to update here the userId obtained through by clicking the user contact
      // socket.on ("chat", (payload)=>{
      //     const chats = [...chat, payload];
          
      //     setChat (chats);
      // })



    return ()=>{
        socket.disconnect();
        socketRef.current = null;
    }
  },[userId,message]);

  // useEffect (()=>{
  //   if (message && socketRef.current) socketRef.current.emit ('send_message', message);
  // }, [message]);
  

  return (
    <>
      <socketContext.Provider value={{chat, setMessage}}>
        {children}
      </socketContext.Provider>
    </>
  );

};

export default socketProvider;