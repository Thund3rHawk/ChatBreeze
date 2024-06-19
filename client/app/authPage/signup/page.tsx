'use client'
import SignUpForm from "@/components/authpages/signUpForm";
import { useRouter } from "next/navigation";
import React from "react";

const SignUp = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-screen h-[80vh] flex justify-center items-center">
        <div className="border border-black rounded-2xl h-[50vh] w-[40vw] ">
          <SignUpForm />
          <div className="text-center">
            Have already an account
            <button
              onClick={() => {
                router.push("./signin");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;