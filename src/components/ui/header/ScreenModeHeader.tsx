import { NavLink } from "react-router-dom";
import LogoSvg from "../../svgs/LogoSvg";
import useTheme from "../../../hooks/useThemeContext";
import ModeButton from "../../header/ModeButton";
import Button from "../../header/Button";
import NavButton from "../../header/NavButton";

export default function ScreenModeHeader() {
  const { theme } = useTheme();
  return (
    <header
      className={` ${
        theme === "light"
          ? "text-[#1E2329] bg-white"
          : "text-[#EAECEF] bg-[#1E2026]"
      } fixed top-0 inset-x-0 items-center justify-between pr-6 font-medium text-sm hidden md:flex z-50 `}
    >
      <nav className="flex items-center justify-center leading-[22px] gap-x-6  ">
        <NavLink to="/">
          <LogoSvg />
        </NavLink>
        <div className="flex items-center justify-center gap-x-6 -translate-x-4">
          <NavButton content="Markets" />
          <NavButton content="Trade" />
          <NavButton content="Derivatives" />
          <NavButton content="More" />
        </div>
      </nav>
      <section className="flex items-center justify-center gap-x-4">
        <Button
          content="Log In"
          btnClass={`${
            theme === "dark"
              ? "bg-[#2B3139] text-[#EAECEF]"
              : "bg-[#EAECEF] text-[#202630] "
          } hover:opacity-80`}
        />
        <Button
          content="Register"
          btnClass={`${
            theme === "dark"
              ? "bg-[#FCD535] text-[#202630]"
              : "bg-[#FCD535] text-[#202630] "
          } hover:opacity-80`}
        />
        <ModeButton />
      </section>
    </header>
  );
}
