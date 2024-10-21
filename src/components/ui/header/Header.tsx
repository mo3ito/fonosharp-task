import ScreenModeHeader from "./ScreenModeHeader";
import MobileModeHeader from "./MobileModeHeader";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  setIsShowSideMenu: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ setIsShowSideMenu }: HeaderProps) {
  return (
    <>
      <ScreenModeHeader />
      <MobileModeHeader setIsShowSideMenu={setIsShowSideMenu} />
    </>
  );
}
