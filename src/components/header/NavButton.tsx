import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useThemeContext";

type NavButtonProps = {
  content: string;
  href?: string;
};

export default function NavButton({ content, href = "/" }: NavButtonProps) {
  const { theme } = useTheme();
  return (
    <NavLink
      to={href}
      className={`${
        theme === "light" ? "hover:text-[#8D5F02]" : "hover:text-[#F0B90B]"
      }`}
    >
      {content}
    </NavLink>
  );
}
