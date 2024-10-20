import { Link , NavLink } from "react-router-dom";
import LogoSvg from "../svgs/LogoSvg";


export default function Header() {
  return (
    <header className="flex items-center justify-between !bg-[#1E2026]">
      <nav className="flex items-center justify-center text-[#EAECEF] text-sm leading-[22px] font-medium gap-x-5">
        <NavLink to="/">
        <LogoSvg/>
        </NavLink>
        <NavLink>Markets</NavLink>
        <NavLink>Trade</NavLink>
        <NavLink>Derivatives</NavLink>
        <NavLink>More</NavLink>
        
      </nav>
      <section></section>
    </header>
  );
}
