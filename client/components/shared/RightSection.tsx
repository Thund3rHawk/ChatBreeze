import React from "react";
import SocketProvider from "@/context/socketProvider";
import ChatArea from "./ChatArea";
import useUserChat from "@/hooks/useUserChat";
import UserDashBoard from "./UserDashBoard";

const RightSection = () => {
  // Have to find the userID from a context provider while click the button of the particular username from the left section.
  //here i can fetch the chats using this particular userId.
  const { showUserDetails } = useUserChat();

  return (
    <div className="w-[65vw] h-[90vh] rounded-3xl mx-10">
      <SocketProvider>{showUserDetails ? <UserDashBoard /> : <ChatArea />}</SocketProvider>
    </div>
  );
};

export default RightSection;
