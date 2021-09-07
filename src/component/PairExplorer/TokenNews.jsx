import React from "react";
import SvgIconCustom from "../SvgIconCustom";
import HelpButton from "./HelpButton";

export default function TokenNews() {
  return (
    <div className="card card-dark">
      <div className="card-head-np align-items-center p-3 justify-content-between">
        <div className="ver-1 font-litle-middle">
          <span className="ver-1 text-spaced-sm">TOKEN</span>{" "}
          <span className="ver-1 font-bold font-litle-large">NEWS</span>
        </div>
        <HelpButton />
      </div>
      <div className="card-body">
        <div className="text-center text-grey mb-3">No news</div>

        <hr className="after-no-news" />

        <div>
          If you want your news to appear in this section, please contact us
        </div>
        <div className="soc-icon mt-3 ">
          <div className="icon-wrapper-soc me-2">
            <a className="icon-footer-wrapper" href="#">
              <SvgIconCustom
                className={["icon-footer"]}
                src="/assets/email.svg"
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
  );
}
