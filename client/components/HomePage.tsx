import React from "react";
import LeftSection from "./shared/LeftSection";
import RightSection from "./shared/RightSection";
import AddUserProvider from "@/context/addUserProvider";
import ChatProvider from "@/context/chatProvider";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <ChatProvider>
          <AddUserProvider>
            <LeftSection />
          </AddUserProvider>
          <RightSection />
        </ChatProvider>
      </div>
    </div>
  );
};

export default HomePage;
