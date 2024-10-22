import { useQuery } from "@tanstack/react-query";
import { fetchCandlestickData } from "../services/fetchCandlestickData";

const useCandlestickData = (symbol: string, interval: string) => {
  return useQuery(
    ["candlestickData", interval],
    () => fetchCandlestickData(symbol, interval),
    {
      refetchInterval: 60000,
    }
  );
};

export default useCandlestickData;
