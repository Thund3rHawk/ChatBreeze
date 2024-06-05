import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/themeProvider";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBreeze",
  description: "Fullstack Chatting App",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ThemeProvider>
        {/* <SessionProvider> */}
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        {/* </SessionProvider> */}
      </ThemeProvider>
  );
}
