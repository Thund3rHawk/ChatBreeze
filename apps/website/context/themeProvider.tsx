"use client";
import { themeContextType } from "@/types";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const themeContext = createContext<themeContextType>({ theme: "", setTheme: () => {} });

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("bg-gradient-to-r from-[#FFFFFF] to-[#E4F9FF]");

  useEffect(() => {
    const LocalStoragetheme = localStorage.getItem("theme");
    if (LocalStoragetheme != null) {
      setTheme(LocalStoragetheme);
    }
  });

  return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
