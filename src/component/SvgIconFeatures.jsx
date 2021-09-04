import React from "react";
import { ReactSVG } from "react-svg";

export default function SvgIconFeatures({ src = "/assets/icons/17.svg" }) {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.classList.add("icons-feature");
        svg.classList.add("ver-1");
      }}
      src={src}
    />
  );
}
