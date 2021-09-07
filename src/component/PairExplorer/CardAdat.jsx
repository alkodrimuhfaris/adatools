import React from "react";
import SvgIconCustom from "../SvgIconCustom";

export default function CardAdat() {
  return (
    <div className="card card-dark mb-4">
      <div className="d-flex card-adat card-body">
        <div className="icon-wrapper-white-big me-3">
          <img src="/assets/logo_gram_dark.png" alt="logo" />
        </div>
        <div className="card-adat-right card-title">
          <div className="card-adat-right-top w-100 mb-2">
            <div>
              <p className="text">
                WBNB /<span className="fw-bolder">ADAT</span>
              </p>
              <span className="sub-text">(ADATools)</span>
            </div>

            <div className="text-2">
              <p className="text-white">Token contract: </p>
              <p className="blue-color ms-2">0xfb7b45...c75a </p>
              <span className="icon-copy-wrapper">
                <SvgIconCustom
                  src="/assets/icons/29.svg"
                  className={["icon-copy"]}
                />
              </span>
              <p className="text-white">- Pair</p>
              <span className="icon-copy-wrapper">
                <SvgIconCustom
                  src="/assets/icons/29.svg"
                  className={["icon-copy"]}
                />
              </span>
            </div>
          </div>

          <div className="gradient-line" />

          <div className="d-flex justify-content-start mt-3">
            <div className="icon-wrapper-table me-2 pointer">
              <img src="/assets/icons/bscscan.png" alt="icon" />
            </div>
            <div className="icon-wrapper-table mx-2 pointer">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>

            <div className="icon-wrapper-table mx-2 pointer">
              <img src="/assets/icons/07.svg" alt="icon" />
            </div>
            <div className="icon-wrapper-table mx-2 pointer">
              <img src="/assets/icons/08.svg" alt="icon" />
            </div>
            <div className="icon-wrapper-table mx-2 pointer">
              <img src="/assets/icons/21.svg" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
