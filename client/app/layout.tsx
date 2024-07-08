import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/themeProvider";
import SocketProvider from "@/context/socketProvider";
import { Toaster } from "@/components/ui/toaster";

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
      <SocketProvider>
        <html lang="en">
          <body className={`bg-gradient-to-r from-[#5061F6] to-[#00DFFD] bg-cover ${inter.className}`}>
            {children}
            <Toaster />
          </body>
        </html>
      </SocketProvider>       
    </ThemeProvider>
  );
}