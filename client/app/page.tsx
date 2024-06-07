'use client'
import HomePage from "@/components/HomePage";
import Navbar from "@/components/shared/Navbar";
import useTheme from "@/hooks/useTheme";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]";
// import { redirect } from "next/navigation";
// import { useRouter } from "next/router";

export default function Home() {
  const { theme } = useTheme();
  // const session = await getServerSession (authOptions);
  // const route = useRouter();

  // if (!session){
  //   redirect("./authPage/login");  
    // return(
    // )
  // }

  // const push =()=>{
  //   route.push("./auth/login")
  // }

  return (
    <div className={`${theme} h-screen`}>
      <Navbar />
      <HomePage />
    </div>
  );
}
