'use client'
import HomePage from "@/components/HomePage";
import Navbar from "@/components/shared/Navbar";
import ThemeProvider from "@/context/themeProvider";
import useTheme from "@/hooks/useTheme";


export default function Home() {
  const {theme} = useTheme();
  
  return (
      <div className={`${theme} h-screen`}>
        <Navbar/>
        <HomePage/>
      </div>
  );
}
