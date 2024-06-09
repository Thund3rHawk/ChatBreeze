"use client"
import React from "react";

import { useRouter } from "next/navigation";
import LoginForm from "@/components/authpages/loginForm";



const Login = () => {
    const router = useRouter();

  

  return (
    <>
      <div className="w-screen h-[80vh] flex justify-center items-center">
        <div className="border border-black rounded-2xl h-[50vh] w-[40vw] ">
            <LoginForm/>
          <div>Haven't an account
            <button onClick={()=>{router.push('./signup')}}>SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
