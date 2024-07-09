"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import useTheme from "@/hooks/useTheme";
import { useRouter } from "next/navigation";
import { createCookie } from "@/utils/createCookie";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Component() {
  const { setTheme, theme } = useTheme();
  const route = useRouter();

  const toggleDarkMode = () => {
    if (theme === "bg-gradient-to-r from-[#FFFFFF] to-[#E4F9FF]") {
      setTheme("bg-gradient-to-r from-[#0D0A0B] to-[#005365] text-white");
      localStorage.setItem("theme", "bg-gradient-to-r from-[#0D0A0B] to-[#005365] text-white");
    } else {
      setTheme("bg-gradient-to-r from-[#FFFFFF] to-[#E4F9FF]");
      localStorage.setItem("theme", "bg-gradient-to-r from-[#FFFFFF] to-[#E4F9FF]");
    }
  };

  const loggedOut = () => {
    createCookie(false, "");
    route.push("/authPage");
  };
  return (
    <header
      className={`flex h-16 w-full items-center justify-between px-4 md:px-6 ${theme}`}
    >
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        {/* <WebcamIcon className="h-6 w-6" /> */}
        <span className="text-lg font-bold">Chat Breeze</span>
      </Link>
      <div className="flex items-center gap-4">
        <Button
          onClick={toggleDarkMode}
          variant={(theme === 'bg-gradient-to-r from-[#FFFFFF] to-[#E4F9FF]') ? "ghost" : "outline"}
          className={`h-8 w-8 rounded-full p-1 ${
            (theme === 'bg-gradient-to-r from-[#FFFFFF] to-[#E4F9FF]') ?  "text-gray-600 hover:bg-gray-100" : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
        >
          {(theme === 'bg-gradient-to-r from-[#FFFFFF] to-[#E4F9FF]') ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>}
          <span className="sr-only">Toggle dark mode</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="https://github.com/shadcn.png" width="32" height="32" className="rounded-full" alt="Avatar" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between">Settings <SettingsOutlinedIcon/></DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between">Support <HelpOutlineOutlinedIcon/></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={loggedOut} className="flex justify-between">Logout <LogoutRoundedIcon/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}