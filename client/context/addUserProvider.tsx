import UserCard from "@/components/shared/UserCard";
import { addUserContextType } from "@/types";
import { endpoints } from "@/utils/endpoints";
import { getCookiesData } from "@/utils/getCookiesData";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const addUserContext = createContext<addUserContextType>({userCard:[], setUserCard: ()=>{}});


const addUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userCard, setUserCard] = useState<React.ReactNode[]>([]);
  useEffect(()=>{
    async function fetchData (){
      const userId = await getCookiesData();
      const data = await axios.post (endpoints.getContactDetails,userId);
      const user = (data.data);
      
      const updateUserCard = user.map((item:any)=>{
        const name = item.name;
        if (userId === item.userId){
          return (<UserCard name = {name} userId= {item.contactId}/>)
        }
      })
      setUserCard (updateUserCard);
    }
    fetchData();
  },[])

  return (
    <addUserContext.Provider value={{ userCard, setUserCard }}>
      {children}
    </addUserContext.Provider>
  );
};

export default addUserProvider;