import LogoSvg from "../../svgs/LogoSvg";
import Button from "../../header/Button";
import useTheme from "../../../hooks/useThemeContext";

export default function MobileModeHeader() {
  const { theme } = useTheme();
  return (
    <header className="  flex md:hidden items-center justify-between pr-4">
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
        <svg
          className={`${
            theme === "dark" ? "fill-[#EAECEF]" : "fill-[#1E2329]"
          } size-6`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 4h16v3H4V4zm0 6.5h16v3H4v-3zM20 17H4v3h16v-3z"
          ></path>
        </svg>
      </section>
    </header>
  );
}
