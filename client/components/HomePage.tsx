"use client";
import React from "react";
import LeftSection from "./shared/LeftSection";
import RightSection from "./shared/RightSection";
import AddUserProvider from "@/context/addUserProvider";
import ChatProvider from "@/context/chatProvider";

const HomePage = () => {
  return (
    <>
      <ChatProvider>
        <AddUserProvider>
          <div className="flex">
            <div className="flex-1">
              <LeftSection />
            </div>
            <div className="border border-muted h-[90vh]"></div>
            <div className="flex-1">
              <RightSection />
            </div>
          </div>
        </AddUserProvider>
      </ChatProvider>
    </>
  );
};

export default HomePage;
