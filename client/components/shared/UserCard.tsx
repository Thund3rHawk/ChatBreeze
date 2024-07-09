import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 import useUserChat from "@/hooks/useUserChat";
import useChat from "@/hooks/useChat";


interface props{
    name: string,
    userId: string
}
const UserCard:React.FC<props> = ({name, userId}) => {
  const {setUserId,setUserName} = useUserChat();
  const openChat = ()=>{
    // Have to pass the userid into the right section.
    setUserId(userId);
    setUserName (name);
  }


  return (    
    <div className="border border-green-500 flex p-3 rounded-2xl my-2 " onClick={openChat}>
      <div className="mx-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-slate-400">CN</AvatarFallback>
        </Avatar>
      </div>
      <div >
        <h1>{name}</h1>
        <p>Latest Message</p>
      </div>
    </div>
  );
};

export default UserCard;