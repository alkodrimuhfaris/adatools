import React from "react";
import SvgIconCustom from "../SvgIconCustom";

export default function OthersTable({
  data = [],
  toolTips = [
    "desc-1",
    "desc-2",
    "desc-3",
    "desc-4aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  ],
  idx = 0,
}) {
  const othersData = [
    [true, { val: true, number: 2, border: "danger" }, true, false],
    [true, { val: true, number: 3, border: "success" }, true, true],
    [true, { val: false, number: 4, border: "danger" }, false, false],
    [true, { val: true, number: 5, border: "success" }, true, false],
    [false, { val: true, number: 2, border: "success" }, true, false],
    [true, { val: true, number: 3, border: "danger" }, true, true],
    [true, { val: true, number: 4, border: "success" }, true, false],
    [true, { val: true, number: 5, border: "danger" }, false, false],
  ];

  const dataUsed =
    idx % 8 === 0
      ? othersData[0]
      : idx % 7 === 0
      ? othersData[1]
      : idx % 6 === 0
      ? othersData[2]
      : idx % 5 === 0
      ? othersData[3]
      : idx % 4 === 0
      ? othersData[4]
      : idx % 3 === 0
      ? othersData[5]
      : idx % 2 === 0
      ? othersData[6]
      : othersData[7];

  return (
    <div className="col-values others">
      {!dataUsed[0] ? null : (
        <div className="icon-table-container">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
            }}
            className="icon-wrapper-table"
          >
            <img src="/assets/icons/bscscan.png" alt="icon" />
          </button>
          <div className="tooltip-table">{toolTips[0]}</div>
        </div>
      )}
      {!dataUsed[1].val ? null : (
        <div className="icon-table-container">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
            }}
            className={` icon-wrapper-table-text ${dataUsed[1].border}`}
          >
            <span>{dataUsed[1].number}</span>
          </button>
          <div className="tooltip-table">{toolTips[1]}</div>
        </div>
      )}
      {!dataUsed[2] ? null : (
        <div className="icon-table-container">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
            }}
            className="icon-wrapper-table-fork"
          >
            <SvgIconCustom className={["icon-svg"]} src="/assets/fork.svg" />
          </button>
          <div className="tooltip-table">{toolTips[2]}</div>
        </div>
      )}
      {!dataUsed[3] ? null : (
        <div className="icon-table-container">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
            }}
            className="icon-wrapper-table-filter"
          >
            <SvgIconCustom className={["icon-svg"]} src="/assets/filter.svg" />
          </button>
          <div className="tooltip-table">{toolTips[3]}</div>
        </div>
      )}
    </div>
  );
}
