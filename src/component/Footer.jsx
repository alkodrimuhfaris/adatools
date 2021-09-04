import React from "react";

export default function Footer() {
  return (
    <div className="bg-160b2c pt-5">
      <div className="container">
        <div className="footer-wrapper">
          <p className="footer-text">
            <span className="material-icons">copyright</span>
            <p className="vertical-super ms-1">
              ADA Tools 2021 - <a href="mailto:info@adatools.com">info@adatools.com</a> | Ads &
              Marketing: <a href="mailto:marketing@adatools.com">marketing@adatools.com</a>
            </p>
          </p>

          <div className="soc-icon ">
            <div className="icon-wrapper-soc me-2 pointer">
              <img src="/assets/icons/logo-telegram.png" alt="logo" />
            </div>
            <div className="icon-wrapper-soc mx-2 pointer">
              <img src="/assets/icons/logo-medium.png" alt="logo" />
            </div>
            <div className="icon-wrapper-soc ms-2 pointer">
              <img src="/assets/icons/logo-twitter.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
