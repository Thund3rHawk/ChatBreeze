import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/themeProvider";
// import { getServerSession } from "next-auth";
// import SessionProvider  from "@/context/sessionProvider";


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

  // const session = await getServerSession();

  return (
      <ThemeProvider>
        {/* <SessionProvider session = {session}> */}
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        {/* </SessionProvider> */}
      </ThemeProvider>
  );
}
