import { useState } from "react";

type ButtonProps = {
  content: string;
  btnClass?: string;
  onClick?:()=>void
};

export default function Button({ content, btnClass , onClick }:ButtonProps) {
    const [isClick , setIsClick]=useState<boolean>(false)
  return (
    <button
      className={`${btnClass} h-8 px-3  rounded-md`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
