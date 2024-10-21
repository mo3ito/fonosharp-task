import Button from "../header/Button";
import useTheme from "../../hooks/useThemeContext";

export default function AuthButtons() {
  const { theme } = useTheme();
  return (
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
  );
}
