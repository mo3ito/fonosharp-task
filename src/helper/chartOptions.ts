import { ApexOptions } from "apexcharts";
import { Theme } from "../types/context/themeContextTypes";

export const getChartOptions = (theme: Theme, interval: string): ApexOptions => ({
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
      theme: theme === "dark" ? "dark" : "light", 
      enabled: true,
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: (val: string) => new Date(val).toLocaleTimeString(),
        style: {
          colors: [theme === "dark" ? "white" : "black"],
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: [theme === "dark" ? "white" : "black"],
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
  });
  
