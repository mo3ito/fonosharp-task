import "./App.css";
import { useQuery } from "@tanstack/react-query";
import getData from "./services/getData";
import { AdvancedRealTimeChart  } from "react-ts-tradingview-widgets";
import useTheme from "./hooks/useThemeContext";
import { useEffect, useState } from "react";

type Interval = "1" | "3" | "5" | "15" | "30" | "60" | "120" | "180" | "240" | "D" | "W";
const fetchCandlestickData = async (symbol: string, interval: string) => {
  const response = await getData(
    `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}`
  );
  return response?.data;
};

function App() {
  const [interval, setInterval] = useState<string>("1m");
  const [candlestickData, setCandlestickData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const { theme } = useTheme();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["candlestickData", interval],
    queryFn: () => {
      return fetchCandlestickData("BTCUSDT", interval);
    },
    refetchInterval: 60000,
  });

  useEffect(() => {
    if (data) {
      setCandlestickData(data);
      setLastUpdated(new Date().toLocaleTimeString());
    }
  }, [data]);

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
    refetch();
  };

  console.log(candlestickData);

  return (
    <div className="h-screen px-5 md:px-6">
    <div className="w-full h-[80%] ">
      <AdvancedRealTimeChart
        theme={theme}
        symbol="BINANCE:BTCUSDT"
        autosize
      ></AdvancedRealTimeChart>
      <p>Last updated: {lastUpdated}</p>
      <div>
          <button className="w-44 h-12 bg-yellow-400" onClick={() => handleIntervalChange("1m")}>1m</button>
          <button className="w-44 h-12 bg-yellow-400" onClick={() => handleIntervalChange("5m")}>5m</button>
          <button className="w-44 h-12 bg-yellow-400" onClick={() => handleIntervalChange("15m")}>15m</button>
          <button className="w-44 h-12 bg-yellow-400" onClick={() => handleIntervalChange("1h")}>1h</button>
          <button className="w-44 h-12 bg-yellow-400" onClick={() => handleIntervalChange("1d")}>1d</button>
        </div>
        {isLoading && <p>Loading data...</p>}
        {isError && <p>Error fetching data...</p>}
    </div>
    </div>
    
  );
}

export default App;
