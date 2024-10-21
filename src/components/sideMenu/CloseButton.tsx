import { Dispatch, SetStateAction } from "react";
import useTheme from "../../hooks/useThemeContext";

type CloseButtonProps = {
  setIsShowSideMenu: Dispatch<SetStateAction<boolean>>;
};

export default function CloseButton({ setIsShowSideMenu }: CloseButtonProps) {
  const { theme } = useTheme();
  return (
    <section className="w-full flex items-center justify-end h-16">
      <button
        onClick={() => setIsShowSideMenu(false)}
        className={`${theme === "dark" && "fill-[#EAECEF]"}`}
      >
        <svg
          className="size-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z"></path>
        </svg>
      </button>
    </section>
  );
}
