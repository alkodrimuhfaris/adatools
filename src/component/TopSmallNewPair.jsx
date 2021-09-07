import React from "react";

export default function TopSmallNewPair() {
  const hotPair = [
    "STARL",
    "BANKETH",
    "FLOKI",
    "PRXY",
    "SAITAMA",
    "TESLA",
    "FLOKI",
    "PRXY",
    "SAITAMA",
    "TESLA",
  ];

  return (
    <div className="pair-explorer">
      <div className="binb-wrapper">
        <span className="text-white ver-1 font-bold">
          BNIB: <span className="text-blue">${2613.62}</span>
        </span>
      </div>
      <div className="hot-pair-wrapper">
        <div className="title-wrapper d-flex align-items-center">
          <span className="text-grey hot-pair-title-text ver-1 font-bold">
            HOT PAIR:{" "}
          </span>
        </div>
        <div className="ver-1 font-bold d-flex align-items-center hot-pair-running-cont">
          <span className="hot-pair-running-text">
            {hotPair.map((val, idx) => {
              return (
                <span className="text-white indiv-text">
                  <span className={idx === 0 ? "text-blue" : ""}>
                    #{idx + 1}
                  </span>{" "}
                  {val}
                </span>
              );
            })}
          </span>
        </div>
      </div>
      <div className="profile-wrapper">
        <button className="profile-btn">
          <div className="image-wrapper">
            <img src="/assets/icons/babydb.png" alt="profile" />
          </div>
          <span className="ver-1 font-bold text-white">BABYDB</span>
        </button>
        <button className="live-trading">
          <span className="litle-dot" />
          <span className="text">Live Trading</span>
        </button>
      </div>
    </div>
  );
}
