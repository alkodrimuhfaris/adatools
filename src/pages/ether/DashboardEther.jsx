import React from "react";
import { Link } from "react-router-dom";
import SvgIcon from "../../component/SvgIcon";
import SvgIconCustom from "../../component/SvgIconCustom";
import TitleCard from "../../component/TitleCard";

export default function DashboardEther(props) {
  console.log("props", props);

  const bgCard = props.theme === "dark" ? "card-dark" : "light";
  const textCol = props.theme === "dark" ? "" : "text-card-dark";

  return (
    <>
      <div className="row pt-4 px-4 row-no-padding ">
        <div className="col-md-6 col-lg-4  col-sm-12 ">
          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              src="/assets/icons/babydb.png"
              smallText="TOOLS"
              boldText="UNISWAP"
            />

            <div className="body-card">
              <div className="search-wrapper mb-2 position-relative">
                <input
                  type="text"
                  className="form-control input-dark "
                  placeholder="Search pair"
                />
                <i className="material-icons" style={{ top: "20%" }}>
                  search
                </i>
              </div>
              <Link
                to="uni-live-pair"
                className={`pair ${textCol} mb-2 d-block d-flex align-items-center`}
              >
                <SvgIcon src="/assets/icons/11.svg" />
                <span className="ps-2 ">Live New Pairs</span>
              </Link>
              <Link
                to="uni-pair-explorer"
                className={`pair ${textCol} mb-2 d-block d-flex align-items-center`}
              >
                <SvgIcon src="/assets/icons/12.svg" />
                <span className="ps-2">Pair Explorer</span>
              </Link>
              <Link
                to="uni-big-swap"
                className={`pair ${textCol} mb-2 d-block d-flex align-items-center`}
              >
                <SvgIcon src="/assets/icons/12.svg" />
                <span className="ps-2">Big Swap Tools</span>
              </Link>
            </div>
          </div>

          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              src="/assets/icons/babydb.png"
              boldText="SUSHI"
              smallText="TOOLS"
            />

            <div className="body-card">
              <div className="search-wrapper mb-2 position-relative">
                <input
                  type="text"
                  className="form-control input-dark "
                  placeholder="Search pair"
                />
                <i className="material-icons" style={{ top: "20%" }}>
                  search
                </i>
              </div>
              <Link
                to="sushi-live-pair"
                className={`pair ${textCol} mb-2 d-block d-flex align-items-center`}
              >
                <SvgIcon src="/assets/icons/11.svg" />
                <span className="ps-2 ">Live New Pairs</span>
              </Link>
              <Link
                to="sushi-pair-explorer"
                className={`pair ${textCol} mb-2 d-block d-flex align-items-center`}
              >
                <SvgIcon src="/assets/icons/12.svg" />
                <span className="ps-2">Pair Explorer</span>
              </Link>
              <Link
                to="sushi-big-swap"
                className={`pair ${textCol} mb-2 d-block d-flex align-items-center`}
              >
                <SvgIcon src="/assets/icons/12.svg" />
                <span className="ps-2">Big Swap Tools</span>
              </Link>
            </div>
          </div>

          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              src="/assets/logo_gram_dark.png"
              smallText="TOOLS"
              boldText="COMMON"
            />

            <div className="body-card">
              <Link
                to="multiswap"
                className={`pair ${textCol} mb-2 d-block d-flex align-items-center`}
              >
                <SvgIcon src="/assets/icons/13.svg" />
                <span className="ps-2 ">MultiSwap</span>
              </Link>
              <div className="pair mb-2 pointer d-flex align-items-center">
                <SvgIcon src="/assets/icons/01.svg" />
                <span className="ps-2">Wallet Information</span>
              </div>
              <div className="pair pointer d-flex align-items-center">
                <SvgIcon src="/assets/icons/14.svg" />
                <span className="ps-2">New Pairs Bot</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4  col-sm-12 mb-4">
          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              smallText="HOT"
              boldText="UNI"
              reverse
              reverseRight
              smallTextRight="HOT"
              boldTextRight="SUSHI"
            />

            <div className="d-flex flex-row w-100 justify-content-between">
              <div className="body-card ">
                <div className="hot-list">
                  <div className="mid first">
                    <div className="num">1</div>
                    <div className="first-mid">
                      <div className="first-wrapper">
                        <img src="/assets/logo_gram_dark.png" alt="logo" />
                      </div>
                      <p className="code">CRUSADER</p>
                      <p>$32.471651</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">2</div>
                    <div>
                      <p className="code">STARL</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">3</div>
                    <div>
                      <p className="code">FLOKI</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">4</div>
                    <div>
                      <p className="code">MM</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">5</div>
                    <div>
                      <p className="code">SAITAMA</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">6</div>
                    <div>
                      <p className="code">F9</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">7</div>
                    <div>
                      <p className="code">KRZ</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">8</div>
                    <div>
                      <p className="code">F9</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">9</div>
                    <div>
                      <p className="code">KRZ</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>
              </div>

              <div className="body-card ">
                <div className="hot-list">
                  <div className="mid first">
                    <div className="num">1</div>
                    <div className="first-mid">
                      <div className="first-wrapper">
                        <img src="/assets/logo_gram_dark.png" alt="logo" />
                      </div>
                      <p className="code">CRUSADER</p>
                      <p>$32.471651</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">2</div>
                    <div>
                      <p className="code">STARL</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">3</div>
                    <div>
                      <p className="code">FLOKI</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">4</div>
                    <div>
                      <p className="code">MM</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">5</div>
                    <div>
                      <p className="code">SAITAMA</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">6</div>
                    <div>
                      <p className="code">F9</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">7</div>
                    <div>
                      <p className="code">KRZ</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">8</div>
                    <div>
                      <p className="code">F9</p>
                      <p>$0.0000000912</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons down">double_arrow</i>
                  </div>
                </div>

                <div className="hot-list">
                  <div className="mid">
                    <div className="num">9</div>
                    <div>
                      <p className="code">KRZ</p>
                      <p>$0.0000000175</p>
                    </div>
                  </div>
                  <div className="i-right">
                    <i className="material-icons up">double_arrow</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4  col-sm-12 mb-4">
          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              reverse
              smallText="FEATURED"
              boldText="SPONSORS"
              center
            />

            <div className="body-card">
              <div className="list-featured mt-4">
                <div className="num"></div>
                <div className="body-featured">
                  <div className="up-featured mb-2">
                    <div className="d-flex">
                      <div className="icon-wrapper-white featured-logo">
                        <img src="/assets/icons/moonfarmer.png" alt="logo" />
                      </div>
                      <div>
                        <p className="code">GRNFI</p>
                        <p>GREENFI</p>
                      </div>
                    </div>
                    <button className="live-trading-button">
                      <span className="litle-dot" />
                      <span className="text">Live Trading</span>
                    </button>
                  </div>
                  <div className="mb-2">
                    GreenFi is the first Green DeFi hub on BSC. One transaction
                    = 1 Tree planted
                  </div>

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

              <div className="body-card text-center">
                <h6 className="fw-bolder pb-2">
                  Do you want to be sponsored on ADAT?
                </h6>
                <p>Contact us:</p>
                <div className="soc-icon mt-3 centering-element">
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
        </div>
      </div>

      <div className="row pt-4 px-4 row-no-padding ">
        <div className="col-md-6 col-lg-4  col-sm-12 ">
          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              src="/assets/pancake.png"
              boldText="BAKERYSWAP"
              smallText="TOOLS"
            />

            <div className="body-card p-4">
              <p className="text-center">Coming soon</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4  col-sm-12 mb-4">
          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              src="/assets/burgerswap.png"
              boldText="BAKERYSWAP"
              smallText="TOOLS"
            />

            <div className="body-card p-4">
              <p className="text-center">Coming soon</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4  col-sm-12 mb-4">
          <div className={`card ${bgCard} mb-4`}>
            <TitleCard
              src="/assets/logo_gram_dark.png"
              boldText="BAKERYSWAP"
              smallText="TOOLS"
            />

            <div className="body-card p-4">
              <p className="text-center">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
