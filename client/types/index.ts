import React, { SetStateAction } from "react";

export type chatContextType = {
    chat: string[],
    setMessage: React.Dispatch<SetStateAction<string | undefined>>,
}

export type themeContextType = {
    theme: string,
    setTheme: React.Dispatch<SetStateAction<string>>,
}