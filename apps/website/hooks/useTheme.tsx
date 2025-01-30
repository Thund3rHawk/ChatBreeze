import { themeContext } from "@/context/themeProvider";
import { useContext } from "react";

const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("Theme context is not there");
  }
  return context;
};

export default useTheme;
