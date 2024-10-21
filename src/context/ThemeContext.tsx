import React, { createContext, useEffect, useState } from "react";
import { Theme, ThemeContextType } from "../types/context/themeContextTypes";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : "light";
  });

  const toggleTheme = (newTheme : Theme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
