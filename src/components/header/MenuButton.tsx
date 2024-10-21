import useTheme from "../../hooks/useThemeContext";

type MenuButtonProps = {
  Onclick: () => void;
};

export default function MenuButton({ Onclick }: MenuButtonProps) {
  const { theme } = useTheme();
  return (
    <button onClick={Onclick}>
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
    </button>
  );
}
