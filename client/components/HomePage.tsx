import React from "react";
import LeftSection from "./shared/LeftSection";
import RightSection from "./shared/RightSection";
import AddUserProvider from "@/context/addUserProvider";
import ChatProvider from "@/context/chatProvider";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex">
        <ChatProvider>
          <AddUserProvider>
            <div className="flex-1">
              <LeftSection />
            </div>
          </AddUserProvider>
          <div className="flex-1">            
            <RightSection />
          </div>
        </ChatProvider>
      </div>
    </div>
  );
};

export default HomePage;