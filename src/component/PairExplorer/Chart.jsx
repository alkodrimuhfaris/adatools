import React from "react";
import ChartWrapper from "../ChartWrapper";

export default function Chart() {
  return (
    <div
      className="card candlestick h-100"
      style={{
        borderRadius: 10,
      }}
    >
      <div
        style={{ minHeight: "463px" }}
        className="card-body position-relative h-100"
      >
        <div
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          className="position-absolute w-100 h-100 p-4"
        >
          <ChartWrapper title="Stock Market" />
        </div>
      </div>
    </div>
  );
}
