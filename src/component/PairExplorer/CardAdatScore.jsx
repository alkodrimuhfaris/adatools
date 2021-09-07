import React from "react";

export default function CardAdatScore() {
  const data = [
    {
      name: "Information",
      value: 99,
    },
    {
      name: "Transaction",
      value: 99,
    },
    {
      name: "Holder",
      value: 99,
    },
    {
      name: "Creation",
      value: 99,
    },
    {
      name: "Pool",
      value: 99,
    },
  ];

  return (
    <div className="card card-dark mb-3">
      <div className="card-head-np p-3 justify-content-between align-items-center">
        <div className="ver-1 font-litle-middle">
          <span className="ver-1 text-spaced-sm">ADAT</span>{" "}
          <span className="ver-1 font-bold font-litle-large">SCORE</span>
        </div>
        <div className="ver-1 font-pretty-large font-bold">99</div>
      </div>
      <div className="card-body">
        <div>
          {data.map((val, idx) => {
            return (
              <div key={idx} className="d-flex justify-content-between">
                <p className="fw-bolder mb-2">{val.name}</p>
                <p className="text-grey">{val.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
