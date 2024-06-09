"use client";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/shared/Navbar";
import useTheme from "@/hooks/useTheme";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { theme } = useTheme();

  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <div className={`${theme} h-screen`}>
        <Navbar />
        <HomePage />
      </div>
    );
  }

  return (
    redirect('/api/auth/signin')
  )  
}
