import { Dispatch, SetStateAction } from "react";
import useTheme from "../../hooks/useThemeContext";
import MenuItems from "../sideMenu/MenuItems";
import AuthButtons from "../sideMenu/AuthButtons";
import CloseButton from "../sideMenu/CloseButton";

type SideMenuProps = {
  setIsShowSideMenu: Dispatch<SetStateAction<boolean>>;
  isShowSideMenu: boolean;
};

export default function SideMenu({
  setIsShowSideMenu,
  isShowSideMenu,
}: SideMenuProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark"
          ? "text-[#EAECEF] bg-[#1E2026] "
          : "bg-white text-[#1E2329]"
      } fixed inset-0 z-50 w-full h-full transition-transform duration-300 ease-out ${
        isShowSideMenu ? "translate-y-0" : "translate-y-full"
      } flex flex-col items-center px-6`}
    >
      <CloseButton setIsShowSideMenu={setIsShowSideMenu} />
      <AuthButtons />
      <MenuItems />
    </div>
  );
}
