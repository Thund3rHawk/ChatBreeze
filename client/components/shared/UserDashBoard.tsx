import useUserChat from "@/hooks/useUserChat";
import { Button } from "@mui/material";
import React from "react";
import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import DuoRoundedIcon from '@mui/icons-material/DuoRounded';

const UserDashBoard = () => {
  const { setShowUserDetails, showUserDetails, userName, userImage } = useUserChat();
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
          <h1 className="m-5 text-[25px]">{userName}</h1>
          <div className="flex justify-between w-[20vw] border-t border-muted p-4">
              <Button className="rounded-lg shadow-sm shadow-green-600 px-8 py-4" onClick={closeUserDashboard}><ChatRoundedIcon className="text-[30px] "/></Button>
              <Button className="rounded-lg shadow-sm shadow-green-600 px-8 py-4"><CallRoundedIcon className="text-[30px] "/></Button>
              <Button className="rounded-lg shadow-sm shadow-green-600 px-8 py-4"><DuoRoundedIcon className="text-[30px] "/></Button>
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default UserDashBoard;
