import React from "react";
import SvgIconCustom from "../SvgIconCustom";
import HelpButton from "./HelpButton";

export default function TopSponsor() {
  return (
    <div className="card card-dark mb-3 top-sponsor">
      <div className="card-head-np p-3 justify-content-between align-items-center">
        <div className="ver-1 font-litle-middle">
          <span className="ver-1 text-spaced-sm">TOP</span>{" "}
          <span className="ver-1 font-bold font-litle-large">SPONSOR</span>
        </div>
        <HelpButton />
      </div>
      <div className="card-body">
        <div className="up-featured mb-2">
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex align-items-center">
              <h4 className="mb-0 ver-1 font-bold">MFM</h4>
              <div className="mfm-circle">
                <div />
              </div>
            </div>
            <p>MoonFarmer</p>
          </div>
        </div>
        <div className="soc-icon mt-3 p-0">
          <div className="icon-wrapper-soc me-2">
            <a className="icon-footer-wrapper" href="#">
              <SvgIconCustom
                className={["icon-footer"]}
                src="/assets/chain.svg"
              />
              {/* <img src="/assets/icons/logo-telegram.png" alt="logo" /> */}
            </a>
          </div>
          <div className="icon-wrapper-soc mx-2">
            <a className="icon-footer-wrapper" href="#">
              <SvgIconCustom
                className={["icon-footer"]}
                src="/assets/medium.svg"
              />
            </a>
            {/* <img src="/assets/icons/logo-medium.png" alt="logo" /> */}
          </div>
          <div className="icon-wrapper-soc ms-2">
            <a className="icon-footer-wrapper" href="#">
              <SvgIconCustom
                className={["icon-footer"]}
                src="/assets/twitter.svg"
                // src="./public/assets/twitter.svg"
              />
            </a>
            {/* <img src="/assets/icons/logo-twitter.png" alt="logo" /> */}
          </div>
        </div>
        <div className="mt-2">
          Join ICO of the marketing platform made to promote blockchain
        </div>
      </div>
    </div>
  );
}
