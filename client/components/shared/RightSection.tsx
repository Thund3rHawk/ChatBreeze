import React from "react";
import SocketProvider from "@/context/socketProvider";
import ChatArea from "./ChatArea";
import useUserChat from "@/hooks/useUserChat";
import UserDashBoard from "./UserDashBoard";
import {motion} from 'framer-motion'

interface props {
  senderId: string,
}

const RightSection: React.FC<props> = ({senderId}) => {
  const { showUserDetails } = useUserChat();

  return (
    <motion.div className="w-[65vw] h-[90vh] rounded-3xl mx-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 1.5}}>
      <SocketProvider>{showUserDetails ? <UserDashBoard /> : <ChatArea senderId={senderId}/>}</SocketProvider>
    </motion.div>
  );
};

export default RightSection;
