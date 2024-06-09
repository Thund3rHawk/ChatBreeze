import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/themeProvider";
import SessionProvider from '@/context/sessionProvider'
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBreeze",
  description: "Fullstack Chatting App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <ThemeProvider>        
      <html lang="en">
        <body className={inter.className}>
          <SessionProvider session={session}>
          {children}
          </SessionProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
