import React from "react";
import { Link } from "react-router-dom";

export default function TopSmallStandard({
  isMobile = false,
  parent,
  setParent = (val) => {
    return val;
  },
}) {
  return (
    <div className="container d-flex justify-content-between">
      <div className="d-flex text-white">
        <Link
          className="ver-1 text-decoration-none text-white"
          to={`/app/ether/main`}
          replace
        >
          <div
            className={
              parent === "ether" ? "me-3 tab-top-selected" : "me-3 pointer"
            }
            onClick={parent !== "ether" ? () => setParent("ether") : null}
          >
            <img
              src="/assets/icons/ethereum.png"
              alt="ether"
              className="logo-ether"
            />
            <p className="d-inline ms-1">Ether</p>
          </div>
        </Link>
        <Link
          className="ver-1 text-decoration-none text-white"
          to={`/app/bsc/main`}
          replace
        >
          <div
            className={
              parent === "bsc" ? "me-3 tab-top-selected" : "me-3 pointer"
            }
            onClick={parent !== "bsc" ? () => setParent("bsc") : null}
          >
            <img src="/assets/icons/bsc.png" alt="bsc" className="logo-ether" />
            <p className="d-inline ms-1">BSC</p>
          </div>
        </Link>
        <Link
          className="ver-1 text-decoration-none text-white"
          to={`/app/polygon/main`}
          replace
        >
          <div
            className={
              parent === "polygon" ? "me-3 tab-top-selected" : "me-3 pointer"
            }
            onClick={parent !== "polygon" ? () => setParent("polygon") : null}
          >
            <img
              src="/assets/icons/polygon.png"
              alt="polygon"
              className="logo-ether"
            />
            <p className="d-inline ms-1">Polygon</p>
          </div>
        </Link>
      </div>
      <div className={isMobile ? "d-none" : "top-right-text-container"}>
        <div className="top-right-text">
          <span className="text-white">Next ADATShare: </span>
          <span className="text-blue">2021-09-01 - 1,252,964 ADAT </span>
          <span className="text-white">| Next Token Burn: </span>
          <span className="text-blue">2021-09-01 - 28,107 ADAT</span>
        </div>
      </div>
    </div>
  );
}
