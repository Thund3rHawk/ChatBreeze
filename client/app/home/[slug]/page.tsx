"use client";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/shared/Navbar";
import useTheme from "@/hooks/useTheme";

const Home = ({ params }: { params: { slug: string } }) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} h-screen`}>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default Home;