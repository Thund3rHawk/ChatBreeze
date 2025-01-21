import { addUserContext } from "@/context/addUserProvider";
import { useContext } from "react";

const useAddUser = () => {
  const context = useContext(addUserContext);
  if (!context) {
    throw new Error("add user context is not there");
  }
  return context;
};

export default useAddUser;
