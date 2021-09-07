import React from "react";
import HelpButton from "./HelpButton";

export default function Favorites() {
  const [selected, setSelected] = React.useState(3);

  const data = [
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "ADAT",
      amount: "$0.04003121",
    },
    {
      name: "RALPH",
      amount: "$0.04003121",
    },
    {
      name: "SOTU",
      amount: "$0.04003121",
    },
    {
      name: "MIMETIC",
      amount: "$0.04003121",
    },
    {
      name: "SOTU",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
    {
      name: "META",
      amount: "$0.04003121",
    },
  ];

  return (
    <div className="favorites h-100">
      <div className="card card-dark card-favorites h-100">
        <div className="card-head-np align-items-center justify-content-between py-3 px-3">
          <h5 className="fw-bolder p-0 m-0">FAVORITES</h5>
          <HelpButton />
        </div>

        {/* <div className="gradient-line" /> */}
        <div className="card-body overflow-hidden">
          <div className="list-code hidden-scroll mt-2">
            {data.map((val, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setSelected(idx)}
                  className={`fav-btn ${selected === idx ? "selected" : ""} ${
                    val.name === "ADAT" ? "color-aqua" : ""
                  }`}
                >
                  <div className="list-text">
                    <p className="fw-bolder">{val.name}</p>
                    <p>{val.amount}</p>
                  </div>
                  <div className="list-btn">
                    {selected !== idx ? null : (
                      <button
                        disabled={selected !== idx}
                        className="x-code color-aqua"
                      >
                        <span>x</span>
                      </button>
                    )}
                    {selected !== idx ? null : <div className="tooltip-content">Delete</div>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
