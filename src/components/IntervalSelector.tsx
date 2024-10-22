type IntervalSelectorProps = {
  interval: string;
  onChange: (newInterval: string) => void;
};

export default function IntervalSelector({
  interval,
  onChange,
}: IntervalSelectorProps) {
  return (
    <div className="mb-4 flex justify-center sm:justify-start ">
      <select
        className="border rounded-lg p-2 sm:p-2 w-64 z-30"
        value={interval}
        onChange={(e) => onChange(e.target.value)}
      >
        {["1m", "5m", "15m", "1h", "1d"].map((timeframe) => (
          <option key={timeframe} value={timeframe}>
            {timeframe}
          </option>
        ))}
      </select>
    </div>
  );
}
