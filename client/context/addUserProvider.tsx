import { addUserContextType } from "@/types";
import React, { createContext, useState } from "react";

export const addUserContext = createContext<addUserContextType>({userCard:[], setUserCard: ()=>{}});

const addUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userCard, setUserCard] = useState<React.ReactNode[]>([]);
  //Here we fetch the users from db and update the state usercard;

  return (
    <addUserContext.Provider value={{ userCard, setUserCard }}>
      {children}
    </addUserContext.Provider>
  );
};

export default addUserProvider;
