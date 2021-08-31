import React, { useState, useEffect } from "react";
import Chart from "kaktana-react-lightweight-charts";
import data from "../dto/data.json";

export default function ChartGraph() {
  const [options, setOptions] = useState({
    alignLabels: true,
    timeScale: {
      rightOffset: 12,
      barSpacing: 3,
      fixLeftEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      borderVisible: false,
      borderColor: "#fff000",
      visible: true,
      timeVisible: true,
      secondsVisible: false,
    },
  });
  const [dataSet, SetDataSet] = useState([]);

  useEffect(() => {
    const nData = data.map((val) => {
      const newVal = {
        date: val.date,
        open: +val.open,
        high: +val.high,
        low: +val.low,
        close: +val.close,
      };
      return newVal;
    });
    SetDataSet(nData);
  }, []);

  return (
    <Chart
      options={options}
      candlestickSeries={dataSet}
      autoWidth
      height={430}
    />
  );
}
