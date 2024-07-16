"use client";
import React, { useEffect, useState } from "react";
import UpdateUserDetails from "@/components/shared/UpdateUserDetails";
import Navbar from "@/components/shared/Navbar";
import useTheme from "@/hooks/useTheme";
import axios from "axios";
import { endpoints } from "@/utils/endpoints";

const page = ({ params }: { params: { slug: string } }) => {
  const { theme } = useTheme();
  const [userName, setUserName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.post(endpoints.uesrDetailsUpdate, {
          userId: params.slug,
        });

        const userData = response.data.user;
        setUserName(userData.username);
        setName(userData.name || "");
        setEmail(userData.email);
        setBio(userData.bio || "");
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, [params.slug, endpoints.uesrDetailsUpdate]);

  return (
    <div className={`${theme} h-screen`}>
      <Navbar />
      {userName != "" ? <UpdateUserDetails userId={params.slug} username={userName} Email= {email} Bio = {bio} Name= {name} /> : <div>Loading</div>}
    </div>
  );
};

export default page;
