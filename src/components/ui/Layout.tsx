import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import useTheme from "../../hooks/useThemeContext";
import SideMenu from "./SideMenu";

const Layout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#1E2026]" : "bg-white"
      } w-full min-h-screen `}
    >
      <Header />
      <SideMenu/>
      <Outlet />
    </div>
  );
};

export default Layout;
