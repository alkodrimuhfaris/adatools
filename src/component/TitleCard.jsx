import React from "react";
import SvgIcon from "./SvgIcon";

export default function TitleCard({
  src = "",
  boldText = "QUICKSWAP",
  smallText = "TOOLS",
  smallTextRight = "",
  boldTextRight = "",
  reverse = false,
  reverseRight = false,
  center = false,
}) {
  return (
    <div
      className={`card-head ${src === "" ? "iconless" : ""}
      ${
        smallTextRight === "" && boldTextRight === ""
          ? center
            ? "d-flex align-items-center center"
            : "d-flex align-items-center"
          : "double"
      }
      `}
    >
      {src !== "" ? (
        <div className="icon-wrapper-white me-3">
          <img src={src} alt="icon" />
        </div>
      ) : null}
      {!(smallTextRight === "" && boldTextRight === "") ? (
        <div className="w-100 row no-gutters">
          <div className="col-6 justify-content-center">
            {reverse ? (
              <div className="centering-element ver-1 text-spaced-sm">
                <span>{smallText}</span>
                <span style={{ marginLeft: "0.5em" }} className="fw-bolder">
                  {boldText}
                </span>
              </div>
            ) : (
              <div className="centering-element ver-1 text-spaced-sm">
                <span className="fw-bolder">{boldText}</span>
                <span style={{ marginLeft: "0.5em" }}>{smallText}</span>
              </div>
            )}
          </div>
          <div className="col-6 justify-content-center">
            {reverseRight ? (
              <div className="centering-element ver-1 text-spaced-sm">
                <span>{smallTextRight}</span>
                <span style={{ marginLeft: "0.5em" }} className="fw-bolder">
                  {boldTextRight}
                </span>
              </div>
            ) : (
              <div className="centering-element ver-1 text-spaced-sm">
                <span className="fw-bolder">{boldTextRight}</span>
                <span style={{ marginLeft: "0.5em" }}>{smallTextRight}</span>
              </div>
            )}
          </div>
        </div>
      ) : reverse ? (
        <div className="centering-element ver-1 text-spaced-sm">
          <span>{smallText}</span>
          <span style={{ marginLeft: "0.5em" }} className="fw-bolder">
            {boldText}
          </span>
        </div>
      ) : (
        <div className="centering-element ver-1 text-spaced-sm">
          <span className="fw-bolder">{boldText}</span>
          <span style={{ marginLeft: "0.5em" }}>{smallText}</span>
        </div>
      )}
    </div>
  );
}
