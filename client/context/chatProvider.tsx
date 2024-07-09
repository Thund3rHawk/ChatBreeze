import React, { createContext, useEffect, useState } from "react";
import { chatProviderType } from "@/types";

export const ChatContext = createContext<chatProviderType>({
  userId: "",
  setUserId: () => {},
  userName: "",
  setUserName: () => {},
  showUserDetails: false,
  setShowUserDetails: () => {},
});

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(()=>{
    setShowUserDetails(false);
  }, [userId]);

  return <ChatContext.Provider value={{ userId, setUserId, userName, setUserName, showUserDetails, setShowUserDetails }}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
