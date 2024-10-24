export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: (newTheme : Theme) => void;
};
