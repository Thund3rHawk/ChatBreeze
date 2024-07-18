import React, { createContext, useEffect, useState } from "react";
import { chatProviderType } from "@/types";
import axios from "axios";
import { endpoints } from "@/utils/endpoints";

export const ChatContext = createContext<chatProviderType>({
  userId: "",
  setUserId: () => {},
  contactObjectId: "",
  setContactObjectId: () => {},
  userName: "",
  setUserName: () => {},
  showUserDetails: false,
  setShowUserDetails: () => {},
  userImage: '',
  setUserImage: ()=>{},
});

const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [contactObjectId, setContactObjectId] = useState("");
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("https://github.com/shadcn.png");
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    setShowUserDetails(false);
  }, [userId]);

  useEffect (()=>{
    async function changeName (){
      if (contactObjectId != ''){
        await axios.post (endpoints.updateContactName, {
          contactObjectId: contactObjectId,
          name: userName
        })
      }
    }
    changeName();
  }, [userName])

  return (
    <ChatContext.Provider value={{ userId, setUserId, userName, setUserName, showUserDetails, setShowUserDetails, userImage, setUserImage, contactObjectId, setContactObjectId }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
