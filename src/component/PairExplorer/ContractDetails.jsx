import React from "react";
import SvgIconCustom from "../SvgIconCustom";
import HelpButton from "./HelpButton";

export default function ContractDetails({
  buttonAction = [true, false, true, false],
}) {
  const icons = [
    "/assets/icons/pair-explorer/21.svg",
    "/assets/icons/pair-explorer/20.svg",
    "/assets/icons/pair-explorer/19.svg",
    "/assets/icons/pair-explorer/18.svg",
  ];

  return (
    <div className="card card-dark mb-3 contract-detail">
      <div className="card-head-contract-details">
        <p className="fw-bolder mb-2">Contract Details</p>
        <div className="mt-2 d-flex justify-content-start">
          {icons.map((val, idx) => {
            return (
              <button
                className={`icon-wrapper shadow-no-stylized ${
                  buttonAction[idx] ? "" : "disable"
                }`}
              >
                <SvgIconCustom
                  key={idx}
                  src={val}
                  className={["icon-action"]}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="card-body">
        <div className="d-flex align-items-center my-2">
          <p className="fw-bolder me-2 p-0">Community Trust</p>
          <HelpButton />
        </div>

        <div className="d-flex align-items-center">
          <div className="sip-ic">
            <i className="material-icons">thumb_up</i>
          </div>
          <div className="hr-wrapper">
            <hr />
          </div>
          <div className="sip-ic">
            <i className="material-icons">thumb_down</i>
          </div>
        </div>

        <div className="d-flex justify-content-between small mt-2">
          <p className="text-grey thumb-count">{'95'}%</p>
          <p className="text-grey">({'545'} votes)</p>
          <p className="text-grey thumb-count">{'5'}%</p>
        </div>
      </div>
    </div>
  );
}
