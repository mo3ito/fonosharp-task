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
    <header className="flex md:hidden items-center justify-between pr-4">
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
