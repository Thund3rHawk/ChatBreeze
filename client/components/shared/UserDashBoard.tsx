import useUserChat from "@/hooks/useUserChat";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import DuoRoundedIcon from '@mui/icons-material/DuoRounded';
import { ChangeContactNameForm } from "./ChangeContactNameForm";


const UserDashBoard = () => {
  const { setShowUserDetails, showUserDetails, userName, userImage } = useUserChat();

  useEffect(()=>{
    // Function for close userDashboard using escape
    const handleKeyDown = (event:any) => {
      if (event.key === 'Escape') {
        closeUserDashboard();
      }
    };
    if (showUserDetails) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  },[showUserDetails]);

  const closeUserDashboard = () => {
    setShowUserDetails(!showUserDetails);
  };
  return (
    <MotionConfig transition={{ duration: 1.5 }}>
      <motion.div className="h-[80vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="m-3 flex justify-between ">
          User Dashboard
          <Button onClick={closeUserDashboard}>X</Button>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center">
          <Image src={userImage} alt="@shadcn" className="rounded-full" width={200} height={200} />
          <div className="flex items-center">
            <h1 className="my-5 ms-4 text-[25px]">{userName}</h1>
            <ChangeContactNameForm/>
          </div>
          <p className="my-4 w-[35vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum unde nemo cumque molestias illum molestiae tempora cum quam maxime!</p>
          <div className="flex justify-between w-[40vw] border-t border-muted p-4">
              <Button className="rounded-lg shadow-sm shadow-green-600 px-4 py-2 w-[200px]" onClick={closeUserDashboard}>
                <div className="flex-col">
                  <ChatRoundedIcon className=""/> 
                  <p>Message</p>                  
                </div>
                </Button>
              <Button className="rounded-lg shadow-sm shadow-green-600 px-4 py-2 w-[200px]">
                <div>                  
                  <CallRoundedIcon className="text-[30px] "/>
                  <p>Call</p>
                </div>
                </Button>
              <Button className="rounded-lg shadow-sm shadow-green-600 px-4 py-2 w-[200px]">
                <div>
                  <DuoRoundedIcon className="text-[30px] "/>
                  <p>Video</p>
                </div>
                </Button>
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default UserDashBoard;