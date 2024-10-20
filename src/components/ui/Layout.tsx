import { Outlet } from "react-router-dom";
import Header from "./Header";
import useTheme from "../../hooks/useThemeContext";

const Layout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#1E2026]" : "bg-white"
      } w-full min-h-screen `}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
