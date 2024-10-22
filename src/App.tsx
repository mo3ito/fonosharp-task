import "./App.css";
import { useQuery } from "@tanstack/react-query";
import getData from "./services/getData";
import useTheme from "./hooks/useThemeContext";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CandlestickData } from "./types/apexChartTypes";
import Loading from "./components/Loading";



const fetchCandlestickData = async (symbol: string, interval: string) => {
  const response = await getData(
    `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=1440`
  );
  return response?.data;
};

function App() {
  const [interval, setInterval] = useState<string>("1m");
  const [candlestickData, setCandlestickData] = useState<CandlestickData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const { theme } = useTheme();

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

  const chartOptions = {
    chart: {
      type: 'candlestick',
      background: theme === "dark" ? "#333" : "#fff",
    },
    title: {
      text: `CandleStick Chart - BTCUSDT (${interval})`,
      align: "left",
      style: {
        color: theme === "dark" ? "white" : "black", 
      },
    },
    tooltip: {
      enabled: true,
      style: {
        color: theme === "dark" ? "white" : "black", 
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: (val: string) => new Date(val).toLocaleTimeString(),
        style: {
          colors: theme === "dark" ? "white" : "black",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: theme === "dark" ? "white" : "black",
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
          title: {
            text: `BTCUSDT (${interval})`,
          },
        },
      },
    ],
  };
  
  const handleIntervalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newInterval = event.target.value;
    setInterval(newInterval);
    refetch(); 
  };

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <div>Error loading data. Please try again later.</div>;
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
