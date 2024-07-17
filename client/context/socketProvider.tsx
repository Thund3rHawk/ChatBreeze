"use client";
import useUserChat from "@/hooks/useUserChat";
import { chatContextType, chatMessageType } from "@/types";
import { endpoints } from "@/utils/endpoints";
import { getCookiesData } from "@/utils/getCookiesData";
import React, { useState, createContext, useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

export const socketContext = createContext<chatContextType | null>(null);

const socketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {  
  const socketRef = useRef<Socket | null>();
  const [chat, setChat] = useState<chatMessageType[]>([]);
  const [message, setMessage] = useState<string>('');

  // Have to use this userid for making the specific chatroom for one to one connection
  const { userId, userName } = useUserChat();

  console.log(chat);
  

  useEffect(() => {
    const socket = io(endpoints.socketEndpoint, {
      autoConnect: false,
    });
    socketRef.current = socket;
    socket.connect();
    const chats: chatMessageType[] = ([]);
    async function getSenderId() {
      try {
        const senderId = await getCookiesData();
        socket.emit("join", senderId);

        if (socket.connected){
          const sms = message;
          if (sms.trim() != ''){
            socket.emit("send-message", { receipentId: userId, message: message, userId: senderId });
          }
  
          socket.on("receive-message", (payload) => {
            const msg = payload.message.trim();
            if (msg != '' && senderId){
              console.log("recieving message");              
              chats.push({ message: payload.message, recieverId:payload.receipentId, senderId: payload.userId, userName: userName });
              setChat(chat.concat(chats));
            }
          });
        }
      } catch (e) {
        console.log("Socker Client side error:", e);
      }
    }

    getSenderId();
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  },[userId,message]);

  return (
    <>
      <socketContext.Provider value={{ chat, setMessage, setChat }}>{children}</socketContext.Provider>
    </>
  );
};

export default socketProvider;