'use client'
import { themeContextType } from "@/types";
import React, { useState } from "react";
import { createContext } from "react";

export const themeContext = createContext<themeContextType>({theme: '', setTheme: ()=>{}});

const ThemeProvider:React.FC<{children: React.ReactNode}> = ({children})=>{
    const [theme, setTheme] = useState<string>('bg-white text-black')
    return(
        <themeContext.Provider value = {{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )

}

export default ThemeProvider