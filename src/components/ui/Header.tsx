import { NavLink } from "react-router-dom";
import LogoSvg from "../svgs/LogoSvg";
import useTheme from "../../hooks/useThemeContext";



export default function Header() {
    const {toggleTheme , theme} = useTheme()
  return (
    <header className={` ${theme === 'light' ? 'text-[#1E2329]' : 'text-[#EAECEF]'} flex items-center justify-between pr-6 `}>
      <nav className="flex items-center justify-center  text-sm leading-[22px] font-medium  gap-x-5">
        <NavLink to="/">
        <LogoSvg/>
        </NavLink>
        <NavLink>Markets</NavLink>
        <NavLink>Trade</NavLink>
        <NavLink>Derivatives</NavLink>
        <NavLink>More</NavLink>
      </nav>
      <section>

        { theme === "dark" ? <button onClick={()=>toggleTheme()}>
        <svg  className="size-6  fill-[#EAECEF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.5 3h-3v3h3V3zm0 15h-3v3h3v-3zm-6.803-2.818l2.121 2.121-2.121 2.122-2.122-2.122 2.122-2.121zm12.728-8.485l-2.122-2.122-2.12 2.122 2.12 2.121 2.122-2.121zM15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM6.697 8.818l2.121-2.121-2.121-2.122-2.122 2.122 2.122 2.121zM6 10.5v3H3v-3h3zm15 0v3h-3v-3h3zm-1.576 6.803l-2.12 2.121-2.122-2.12 2.121-2.122 2.121 2.121z" ></path></svg>
        </button>
       : <button onClick={()=>toggleTheme()}>
        <svg className="size-6 fill-[#2B3139] " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12.67A6.233 6.233 0 0111.33 4 8.015 8.015 0 1020 12.67z" ></path></svg>
        </button>}
      </section>
    </header>
  );
}
