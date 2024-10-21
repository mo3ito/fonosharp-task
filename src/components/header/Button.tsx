type ButtonProps = {
  content: string;
  btnClass?: string;
  onClick?: () => void;
};

export default function Button({ content, btnClass, onClick }: ButtonProps) {
  return (
    <button className={`${btnClass} h-8 px-3  rounded-lg`} onClick={onClick}>
      {content}
    </button>
  );
}
