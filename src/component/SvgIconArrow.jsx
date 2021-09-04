import React from 'react'
import { ReactSVG } from "react-svg";

export default function SvgIconArrow({ src = "../assets/icons/arrow.svg" }) {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.classList.add("icon-arrow");
        svg.classList.add("ver-1");
        svg.setAttribute("style", "width: 5em; height: 2em; fill: white");
      }}
      src={src}
    />
  );
}