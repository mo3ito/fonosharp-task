import LogoSvg from "../../svgs/LogoSvg";
import Button from "../../header/Button";
import useTheme from "../../../hooks/useThemeContext";
import MenuButton from "../../header/MenuButton";
import { Dispatch, SetStateAction } from "react";

type MobileModeHeader = {
  setIsShowSideMenu: Dispatch<SetStateAction<boolean>>;
};

export default function MobileModeHeader({
  setIsShowSideMenu,
}: MobileModeHeader) {
  const { theme } = useTheme();
  return (
    <header
      className={`${
        theme === "dark" ? "bg-[#1E2026]" : "bg-white"
      } flex md:hidden items-center justify-between pr-4 fixed top-0 inset-x-0 z-40`}
    >
      <LogoSvg />
      <section className="flex items-center gap-x-4">
        <Button
          content="Register"
          btnClass={`${
            theme === "dark"
              ? "bg-[#FCD535] text-[#202630]"
              : "bg-[#FCD535] text-[#202630] "
          } hover:opacity-80`}
        />
        <MenuButton Onclick={() => setIsShowSideMenu(true)} />
      </section>
    </header>
  );
}
