import React from "react";
import SvgIconCustom from "./SvgIconCustom";

export default function Footer() {
  return (
    <div className="bg-160b2c container pt-5">
      <div className="container">
        <div className="footer-wrapper">
          <p className="footer-text">
            <p className="d-flex ver-1 font-litle-large ms-1">
            <span style={{fontSize: '1em', paddingTop: '0.23em'}} className="material-icons">copyright</span>
              <span style={{ marginLeft: "0.5em" }} className="font-bold ver-1">
                ADA Tools 2021 -{" "}
                <a
                  className="ml-4 ver-1 link-white"
                  href="mailto:info@adatools.com"
                >
                  info@adatools.com
                </a>{" "}
                | Ads & Marketing:{" "}
                <a
                  className="ml-4 ver-1 link-white"
                  href="mailto:marketing@adatools.com"
                >
                  marketing@adatools.com
                </a>
              </span>
            </p>
          </p>

          <div className="soc-icon">
            <div className="icon-wrapper-soc me-2">
              <a className="icon-footer-wrapper" href="#">
                <SvgIconCustom
                  className={["icon-footer"]}
                  src="/assets/telegram.svg"
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
        </div>
      </div>
    </div>
  );
}
