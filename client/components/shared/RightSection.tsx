import React from "react";
import SocketProvider from "@/context/socketProvider";
import ChatArea from "./ChatArea";
import useUserChat from "@/hooks/useUserChat";
import UserDashBoard from "./UserDashBoard";
import {motion} from 'framer-motion'

const RightSection = () => {
  // Have to find the userID from a context provider while click the button of the particular username from the left section.
  //here i can fetch the chats using this particular userId.
  const { showUserDetails } = useUserChat();

  return (
    <motion.div className="w-[65vw] h-[90vh] rounded-3xl mx-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1.5}}>
      <SocketProvider>{showUserDetails ? <UserDashBoard /> : <ChatArea />}</SocketProvider>
    </motion.div>
  );
};

export default RightSection;
