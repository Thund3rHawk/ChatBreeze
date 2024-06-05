import React from "react";
import AddUserDialogue from "./AddUserDialogue";
import UserCard from "./UserCard";

const LeftSection = () => {
  return (
    <div className="w-[30vw] h-[90vh] border border-slate-400 rounded-3xl mx-10 px-10 py-6">
      <div className="flex justify-between">
        Search Bar
        <AddUserDialogue />
      </div>
      <div className="my-2 overflow-auto h-[80vh] no-scrollbar">
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </div>
    </div>
  );
};

export default LeftSection;
