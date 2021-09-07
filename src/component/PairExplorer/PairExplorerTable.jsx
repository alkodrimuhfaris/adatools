import React from "react";
import SvgIconCustom from "../SvgIconCustom";
import TablePairExplorer from "../TablePairExplorer";

export default function PairExplorerTable() {
  return (
    <div className="d-flex h-100 flex-column table-pair-expl-container">
      <div className="d-flex">
        <button className="trade-bottom-tab">
          <span className="ver-1 font-bold font-normal">Trade History</span>
        </button>
        <button className="positions-tab">
          <span className="ver-1 font-bold font-normal">My Position</span>
        </button>
        <div className="rest-tab">
          <span className="ver-1 p-0 m-0">
            ADAT <span style={{ fontSize: 12 }}>(last 526 trades)</span>
          </span>
          <button className="rest-filter-button">
            <SvgIconCustom
              src={"/assets/filter.svg"}
              className={["filter-icon"]}
            />
          </button>
        </div>
      </div>
      <div className="table-pair-wrapper">
        <div className="w-100 h-100">
          <TablePairExplorer />
        </div>
      </div>
    </div>
  );
}
