import { socketContext } from "@/context/socketProvider";
import { error } from "console";
import { useContext } from "react"

const useChat =()=>{
    const context = useContext (socketContext);
    if (!context){
        throw new Error ("useChat must be used within a ChatProvider");
    }
    return context;
}

export default useChat;