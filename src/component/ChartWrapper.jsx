import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useComponentWidth from "../helpers/useComponentWidth";
import dataJSON from "../dto/data.json";
import ChartGraph from "./ChartGraph";

export default function ChartWrapper({
  title = "Stock Market",
  data = dataJSON,
  currency = "$"
}) {
  const [ref1, wRef1, hRef1] = useComponentWidth();
  const { theme } = useSelector((state) => state.theme);

  return (
    <div ref={ref1} className="w-100 h-100">
      <ChartGraph
        width={wRef1}
        height={hRef1}
        title={title}
        darkTheme={theme === "dark"}
        data={data}
        currency={currency}
      />
    </div>
  );
}
