import React, { SetStateAction } from "react";

export type chatMessageType = {
  message: string;
  recieverId: string;
  senderId: string;
  userName?: string;
  time?: string;
};

export type chatContextType = {
  chat: chatMessageType[];
  setChat: React.Dispatch<SetStateAction<chatMessageType[]>>;
  setMessage: React.Dispatch<SetStateAction<string>>;
};

export type themeContextType = {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<string>>;
};

export type addUserContextType = {
  userCard: React.ReactNode[];
  setUserCard: React.Dispatch<SetStateAction<React.ReactNode[]>>;
};

export type authContextType = {
  loggedIn: boolean;
  setStatus: React.Dispatch<SetStateAction<string>>;
};

export type chatProviderType = {
  userId: string;
  setUserId: React.Dispatch<SetStateAction<string>>;
  contactObjectId: string;
  setContactObjectId: React.Dispatch<SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<SetStateAction<string>>;
  showUserDetails: boolean;
  setShowUserDetails: React.Dispatch<SetStateAction<boolean>>;
  userImage: string;
  setUserImage: React.Dispatch<SetStateAction<string>>;
};

export type updateUserContextType = {
  userId: string;
};
