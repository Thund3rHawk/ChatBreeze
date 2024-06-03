import React, { SetStateAction } from "react";

export type chatContextType = {
    chat: string[],
    setMessage: React.Dispatch<SetStateAction<string | undefined>>,
}