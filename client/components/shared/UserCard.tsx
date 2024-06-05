import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserCard = () => {
    
  return (
    <div className="border border-gray-500 flex p-3 rounded-2xl my-2">
      <div className="mx-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-slate-400">CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h1>User Name</h1>
        <p>Latest Message</p>
      </div>
    </div>
  );
};

export default UserCard;
