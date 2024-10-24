type LastUpdatedProps = {
  time: string;
  theme: string;
};

export default function LastUpdatedData({ time, theme }: LastUpdatedProps) {
  return (
    <div
      className={` ${
        theme === "light" ? "text-[#1E2329]" : "text-[#EAECEF]"
      } text-center my-5 font-bold`}
    >
      Last Updated: {time}
    </div>
  );
}
