import { BINANCEAPI } from "./endpoints/apis";
import getData from "./getData";

export const fetchCandlestickData = async (symbol: string, interval: string) => {
    const response = await getData(
      `${BINANCEAPI}?symbol=${symbol}&interval=${interval}&limit=1440`
    );
    return response?.data;
  };
  