import React from "react";
import { ReactSVG } from "react-svg";

export default function SvgIcon({ src = "/assets/icons/17.svg" }) {
  return src === "/assets/icons/ether.svg" ||
    src === "/assets/icons/bsc.png" ||
    src === "/assets/icons/polygon.png" ? (
    <img src={src} alt="icons" />
  ) : (
    // <img src={"../assets/icons/17.svg"} alt="icons" />

    <ReactSVG
      beforeInjection={(svg) => {
        svg.classList.add("icons");
        svg.classList.add("ver-1");
        // svg.setAttribute("style", "width: 5em; height: 2em; fill: white");
      }}
      src={src}
    />
  );
}
