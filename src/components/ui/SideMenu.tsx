import React from "react";
import Button from "../header/Button";
import useTheme from "../../hooks/useThemeContext";
import ThemeSvg from "../svgs/ThemeSvg";

export default function SideMenu() {
  const { theme } = useTheme();
  return (
    <div className="w-full bg-white absolute inset-0 flex flex-col items-center px-6">
      <section className="w-full flex items-center justify-end h-16">
        <button className="">
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z"></path>
          </svg>
        </button>
      </section>

      <section className="flex items-center justify-center  w-full h-max gap-x-4">
        <Button
          content="Log In"
          btnClass={`${
            theme === "dark"
              ? "bg-[#2B3139] text-[#EAECEF]"
              : "bg-[#EAECEF] text-[#202630] "
          } hover:opacity-80 w-1/2 h-10`}
        />
        <Button
          content="Register"
          btnClass={`${
            theme === "dark"
              ? "bg-[#FCD535] text-[#202630]"
              : "bg-[#FCD535] text-[#202630] "
          } hover:opacity-80 w-1/2 h-10`}
        />
      </section>

      <section className="w-full">
        <div className="flex items-center gap-x-2 h-14 ">
          <svg
            className="size-6 fill-[#B7BDC6]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
          </svg>
          Markets
        </div>

        <div className="flex items-center gap-x-2 h-14 ">
          <svg
            className="size-6 fill-[#B7BDC6]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
          </svg>
          Trade
        </div>

        <div className="flex items-center gap-x-2 h-14 ">
          <svg
            className="size-6 fill-[#B7BDC6]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
          </svg>
          Derivatives
        </div>

        <div className="flex items-center gap-x-2 h-14 ">
          <svg
            className="size-6 fill-[#B7BDC6]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
          </svg>
          More
        </div>

        <div className="flex items-center gap-x-2 h-14 ">
          <svg
            className="size-6 fill-[#B7BDC6]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path>
          </svg>
          More
        </div>

        <div className="flex items-center justify-between h-14 ">
            <div className="flex items-center justify-between gap-x-2">
            <ThemeSvg/>
            Theme
            </div>

            <div className="w-24 h-8 border border-[#D8DCE1] rounded-md">

            </div>

        </div>



        
       
      </section>
    </div>
  );
}
