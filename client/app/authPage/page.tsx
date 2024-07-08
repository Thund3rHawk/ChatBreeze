"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/authForms/loginForm";
import Image from "next/image";
import login_image from '@/public/assets/login_image.png'
import SignUpForm from "@/components/authForms/signUpForm";

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center min-h-screen container">
        <div>
          <Image src = {login_image} alt = "login image" />
        </div>
        <div className=" rounded-2xl pb-8 w-[30vw] min-h-[55vh] bg-[#def2f1]  shadow-blue-950 shadow-2xl flex justify-center flex-col">
          {(form)?<LoginForm />: <SignUpForm/>}
          
          <div className="text-center">
            Have not an account &nbsp;
            <button
              onClick={() => {
                if (form){
                  setForm(false);
                }
                else {
                  setForm (true);
                }
              }}
            >
              {form? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
