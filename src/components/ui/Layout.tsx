import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import useTheme from "../../hooks/useThemeContext";
import SideMenu from "./SideMenu";
import { useState } from "react";

const Layout = () => {
  const { theme } = useTheme();
  const [isShowSideMenu ,setIsShowSideMenu]=useState<boolean>(false)
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#1E2026]" : "bg-white"
      } w-full min-h-screen `}
    >
      <Header setIsShowSideMenu={setIsShowSideMenu} />
      <SideMenu  setIsShowSideMenu={setIsShowSideMenu} isShowSideMenu={isShowSideMenu}/>
      <Outlet />
    </div>
  );
};

export default Layout;
