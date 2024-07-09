"use client";
import useUserChat from "@/hooks/useUserChat";
import { chatContextType, chatMessageType } from "@/types";
import { endpoints } from "@/utils/endpoints";
import { getCookiesData } from "@/utils/getCookiesData";
import React, { useState, createContext, useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

export const socketContext = createContext<chatContextType | null>(null);

const socketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // this chat and setChat is for the recieving the messages I have to write another one for while I send a message it will updated in the right hand side of my chatbox.
  const [chat, setChat] = useState<chatMessageType[]>([]);
  const [message, setMessage] = useState<string>();
  const socketRef = useRef<Socket | null>();

  // Have to use this userid for making the specific chatroom for one to one connection
  const { userId, userName } = useUserChat();

  useEffect(() => {
    const socket = io(endpoints.socketEndpoint, {
      autoConnect: false,
    });
    socketRef.current = socket;
    async function getSenderId() {
      try {
        const senderId = await getCookiesData();
        socket.connect();
        socket.emit("join", senderId);

        socket.emit("send-message", { receipentId: userId, message: message });

        socket.on("receive-message", (payload) => {
          console.log(`Message from ${payload.senderId}: ${payload.message}`);
          const chats = [...chat, { message: payload.message, isUser: false, userId: userId, userName: userName }];
          setChat(chats);
        });
      } catch (e) {
        console.log("Socker Client side error:", e);
      }
    }

    getSenderId();
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [message]);

  return (
    <>
      <socketContext.Provider value={{ chat, setMessage, setChat }}>{children}</socketContext.Provider>
    </>
  );
};

export default socketProvider;
