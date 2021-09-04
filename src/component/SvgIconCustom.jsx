import React from "react";
import { ReactSVG } from "react-svg";

export default function SvgIconCustom({
  src = "/assets/icons/17.svg",
  className = ["icons-feature"],
}) {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        className.forEach((val) => {
          svg.classList.add(val);
        });
        svg.classList.add("ver-1");
        // svg.setAttribute("style", "fill: white");
      }}
      src={src}
    />
  );
}
