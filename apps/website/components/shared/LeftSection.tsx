"use client";
import React from "react";
import AddUserDialogue from "./AddUserDialogue";
import useAddUser from "@/hooks/useAddUser";

const LeftSection = () => {
  const { userCard } = useAddUser();
  let check = false;
  if (userCard.length != 0) {
    check = true;
  }

  return (
    <div className="w-[25vw] h-[90vh] mx-10 px-10 py-6">
      <div className="flex justify-between">
        Search Bar
        <AddUserDialogue />
      </div>
      <div className="my-2 overflow-auto h-[80vh] no-scrollbar">
        {check ? (
          <div>
            {userCard.map((card, index) => {
              return <React.Fragment key={index}>{card}</React.Fragment>;
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[80vh]">Your saved users will appear here</div>
        )}
      </div>
    </div>
  );
};

export default LeftSection;
