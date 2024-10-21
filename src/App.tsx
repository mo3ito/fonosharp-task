import "./App.css";
import { useQuery } from "@tanstack/react-query";
import getData from "./services/getData";
import { AdvancedRealTimeChart, Timeline , } from "react-ts-tradingview-widgets";
import useTheme from "./hooks/useThemeContext";
import { useState } from "react";



function App() {
 
  // const {data  , isLoading} = useQuery({ queryKey: ['todos'], queryFn: async ()=>{
  //   const response = await getData("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m")
  //   console.log(response);
    
    
  // } })
  const [interval , setInterval]=useState<string>('1m')
  const [candlestickData , setCandlestickData]=useState([])
  const [lastUpdated , setLastUpdated]=useState<string>('')

  const {theme} = useTheme()

  return (
    <div className="w-full ">
      <AdvancedRealTimeChart theme={theme} symbol="BINANCE:BTCUSDT" ></AdvancedRealTimeChart>
      
    </div>
  );
}

export default App;
