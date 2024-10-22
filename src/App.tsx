import "./App.css";
import { useQuery } from "@tanstack/react-query";
import getData from "./services/getData";
import useTheme from "./hooks/useThemeContext";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CandlestickData } from "./types/apexChartTypes";
import Loading from "./components/Loading";
import { toast } from "react-toastify";
import { BINANCEAPI } from "./services/endpoints/apis";
import { getChartOptions } from "./helper/chartOptions";



const fetchCandlestickData = async (symbol: string, interval: string) => {
  const response = await getData(
    `${BINANCEAPI}?symbol=${symbol}&interval=${interval}&limit=1440`
  );
  return response?.data;
};

function App() {
  const [interval, setInterval] = useState<string>("1m");
  const [candlestickData, setCandlestickData] = useState<CandlestickData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const { theme } = useTheme();
  const chartOptions = getChartOptions(theme, interval);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["candlestickData", interval],
    queryFn: () => fetchCandlestickData("BTCUSDT", interval),
    refetchInterval: 60000,
  });

  useEffect(() => {
    if (data) {
      const transformedData = data.map(
        ([timestamp, open, high, low, close]: [number, string, string, string, string]) => ({
          x: new Date(timestamp),
          y: [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)],
        })
      );
      setCandlestickData(transformedData);
      setLastUpdated(new Date().toLocaleTimeString());
    }
  }, [data]);

  const handleIntervalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newInterval = event.target.value;
    setInterval(newInterval);
    refetch(); 
  };

  if (isLoading) {
    return <Loading/>
  }
  if (isError) {
    return toast.error('Error loading data. Please try again later.')
  }

  return (
    <div className="min-h-screen px-5 md:px-6">
      <div className="mb-4 flex justify-center sm:justify-start ">
        <select
          className="border rounded-lg p-2 sm:p-2 w-64"
          value={interval}
          onChange={handleIntervalChange}
        >
          {["1m", "5m", "15m", "1h", "1d"].map((timeframe) => (
            <option key={timeframe} value={timeframe}>
            {timeframe}
            </option>
          ))}
        </select>
      </div>
      <ReactApexChart
        options={chartOptions as ApexOptions}
        series={[{ name: "candle", data: candlestickData }]}
        type="candlestick"
        height={"80%"}
      />
      
      <div className={`  text-center  mt-10 flex items-start justify-center`}>
        <p className="bg-[#FCD535] p-2 rounded-md"> Last Updated: {lastUpdated}</p>
        </div>
    </div>
  );
}

export default App;
