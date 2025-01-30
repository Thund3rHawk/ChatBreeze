import { ChatContext } from "@/context/chatProvider";
import { useContext } from "react";

const useUserChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useUserChat must be used within a ChatProvider");
  }
  return context;
};

export default useUserChat;
