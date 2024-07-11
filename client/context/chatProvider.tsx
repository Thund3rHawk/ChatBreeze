import React, { createContext, useEffect, useState } from "react";
import { chatProviderType } from "@/types";

export const ChatContext = createContext<chatProviderType>({
  userId: "",
  setUserId: () => {},
  userName: "",
  setUserName: () => {},
  showUserDetails: false,
  setShowUserDetails: () => {},
  userImage: '',
  setUserImage: ()=>{},
});

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("https://github.com/shadcn.png");
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    setShowUserDetails(false);
  }, [userId]);

  return (
    <ChatContext.Provider value={{ userId, setUserId, userName, setUserName, showUserDetails, setShowUserDetails, userImage, setUserImage }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
