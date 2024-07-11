"use client";
import React, { useState } from "react";
import Image from "next/image";
import login_image from "@/public/assets/login_image.png";
import LoginForm from "@/components/authForms/loginForm";
import SignUpForm from "@/components/authForms/signUpForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  // const [form, setForm] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center min-h-screen container">
        <div>
          <Image src={login_image} alt="login image" />
        </div>

        {/* <div className=" rounded-2xl pb-8 w-[30vw] min-h-[55vh] bg-[#def2f1]  shadow-blue-950 shadow-2xl flex justify-center flex-col"> */}
          {/* {form ? <LoginForm /> : <SignUpForm />}

          <div className="text-center">
            Have not an account &nbsp;
            <button
              onClick={() => {
                if (form) {
                  setForm(false);
                } else {
                  setForm(true);
                }
              }}
            >
              {form ? "Sign Up" : "Sign In"}
            </button>
          </div> */}
          <Tabs defaultValue="signin" className="w-[400px] ">
            <TabsList className="grid w-full grid-cols-2 text-black bg-[#cbf9ff]  shadow-blue-950 shadow-2xl">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="h-[400px] bg-[#def2f1]  shadow-blue-950 shadow-2xl rounded-lg py-10">
              <LoginForm/>
            </TabsContent>
            <TabsContent value="signup" className="h-[400px] bg-[#def2f1]  shadow-blue-950 shadow-2xl rounded-lg p-2">
              <SignUpForm/>
            </TabsContent>
          </Tabs>
        {/* </div> */}
      </div>
    </>
  );
};

export default Login;
