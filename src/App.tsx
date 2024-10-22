import "./App.css";
import useTheme from "./hooks/useThemeContext";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CandlestickData } from "./types/apexChartTypes";
import Loading from "./components/Loading";
import { toast } from "react-toastify";
import { getChartOptions } from "./helper/chartOptions";
import IntervalSelector from "./components/IntervalSelector";
import LastUpdatedData from "./components/LastUpdatedData";
import useCandlestickData from "./hooks/useCandlestickData";

function App() {
  const [interval, setInterval] = useState<string>("1m");
  const [candlestickData, setCandlestickData] = useState<CandlestickData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const { theme } = useTheme();
  const chartOptions = getChartOptions(theme, interval);
  const { data, isLoading, isError, refetch } = useCandlestickData(
    "BTCUSDT",
    interval
  );

  useEffect(() => {
    if (data) {
      const transformedData = data.map(
        ([timestamp, open, high, low, close]: [
          number,
          string,
          string,
          string,
          string
        ]) => ({
          x: new Date(timestamp),
          y: [
            parseFloat(open),
            parseFloat(high),
            parseFloat(low),
            parseFloat(close),
          ],
        })
      );
      setCandlestickData(transformedData);
      setLastUpdated(new Date().toLocaleTimeString());
    }
  }, [data]);

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return toast.error("Error loading data. Please try again later.");
  }

  return (
    <main className="min-h-screen px-5 md:px-6 z-30 pt-16">
      <IntervalSelector interval={interval} onChange={handleIntervalChange} />
      <ReactApexChart
        options={chartOptions as ApexOptions}
        series={[{ name: "candle", data: candlestickData }]}
        type="candlestick"
        height={"85%"}
      />
      <LastUpdatedData time={lastUpdated} theme={theme} />
    </main>
  );
}

export default App;
