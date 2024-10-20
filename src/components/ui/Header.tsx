import { NavLink } from "react-router-dom";
import LogoSvg from "../svgs/LogoSvg";
import useTheme from "../../hooks/useThemeContext";
import ModeButton from "../header/ModeButton";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  return (
    <header
      className={` ${
        theme === "light" ? "text-[#1E2329]" : "text-[#EAECEF]"
      } flex items-center justify-between pr-6 font-medium text-sm`}
    >
      <nav className="flex items-center justify-center   leading-[22px]  gap-x-5 ">
        <NavLink  to="/">
          <LogoSvg />
        </NavLink>
        <div className="flex items-center justify-center gap-x-5 -translate-x-4">
        <NavLink className={`${theme === 'light' ? 'hover:text-[#8D5F02]' : 'hover:text-[#F0B90B]'}`}>Markets</NavLink>
        <NavLink className={`${theme === 'light' ? 'hover:text-[#8D5F02]' : 'hover:text-[#F0B90B]'}`}>Trade</NavLink>
        <NavLink className={`${theme === 'light' ? 'hover:text-[#8D5F02]' : 'hover:text-[#F0B90B]'}`}>Derivatives</NavLink>
        <NavLink className={`${theme === 'light' ? 'hover:text-[#8D5F02]' : 'hover:text-[#F0B90B]'}`}>More</NavLink>
        </div>
      </nav>
      <section className="flex items-center justify-center gap-x-4">

      <button className="h-8 w-16 bg-[#EAECEF] text-[#202630] rounded-md">Log In</button>
        <ModeButton/>
      </section>
    </header>
  );
}
