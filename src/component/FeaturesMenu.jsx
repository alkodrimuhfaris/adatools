import React, { useState, useEffect } from "react";
import SvgIconFeatures from "./SvgIconCustom";

const dataFeature = [
  {
    title: "Pool Explorer",
    desc: "Search for new pools, add or remove liquidity in a pair, find the best gems and avoid the scams.",
    icon: "/assets/icons/11.svg",
    featureImg: "/assets/features_image.png",
  },
  {
    title: "Pair Explorer",
    desc: "Search for new pools, add or remove liquidity in a pair, find the best gems and avoid the scams.",
    icon: "/assets/icons/12.svg",
    featureImg: "/assets/features_image.png",
  },
  {
    title: "Big Swap Explorer",
    desc: "Search for new pools, add or remove liquidity in a pair, find the best gems and avoid the scams.",
    icon: "/assets/icons/03.svg",
    featureImg: "/assets/features_image.png",
  },
  {
    title: "Multiswap",
    desc: "Search for new pools, add or remove liquidity in a pair, find the best gems and avoid the scams.",
    icon: "/assets/icons/13.svg",
    featureImg: "/assets/features_image.png",
  },
  {
    title: "Wallet Info",
    desc: "Search for new pools, add or remove liquidity in a pair, find the best gems and avoid the scams.",
    icon: "/assets/icons/01.svg",
    featureImg: "/assets/features_image.png",
  },
];

export default function FeaturesMenu() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="features-wrap">
      <div className="f-left-wrapper">
        <div className="f-left flex-column">
          {dataFeature.map((val, idx) => {
            return (
              <button
                onClick={() => setSelected(idx)}
                key={idx}
                className={`pe-2 btn-features ${
                  idx === selected ? "selected" : "unselected"
                }`}
              >
                <div
                  className={`pool p-2 d-flex align-items-center ${
                    idx === selected ? "selected" : "unselected"
                  }`}
                >
                  <SvgIconFeatures src={val.icon} />
                  <span className="ps-2">{val.title}</span>
                </div>
                <div
                  className={`desc-wrapper ${
                    idx === selected ? "selected" : "unselected"
                  } ${idx !== dataFeature.length - 1 ? "bordered" : ""}`}
                >
                  <div className="pool-exp ps-2">
                    <img src={val.featureImg} alt="feature" className="f-img" />
                  </div>
                  <p className="text-only">{val.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="f-right w-50">
        <img
          src={`${dataFeature[selected].featureImg}`}
          alt="feature"
          className="f-img"
        />
      </div>
    </div>
  );
}
