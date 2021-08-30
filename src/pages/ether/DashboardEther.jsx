import React from 'react'
import { Link } from 'react-router-dom'


export default function DashboardEther
() {
  return (
    <>
    <div className="row pt-4 px-4 row-no-padding ">

      <div className="col-md-4 col-sm-12 ">

        <div className="card card-dark p-3 mb-4">
          <div className="card-head ">
            <div className="icon-wrapper-white me-3">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>
            <div className="centering-element">
              <span className="fw-bolder"> UNISWAP </span>
              TOOLS
            </div>
          </div>
          <hr />
          <div className="body-card">
            <div className="search-wrapper mb-2 position-relative">
              <input type="text" className="form-control input-dark " placeholder="Search pair" />
              <i className="material-icons" style={{ top: '20%' }}>search</i>
            </div>
            <Link to="uni-live-pair" className="pair mb-2 d-block">
              <img src="/assets/icons/11.svg" alt="icons" />
              <span className="ps-2 ">Live New Pairs</span>
            </Link>
            <Link to="uni-pair-explorer" className="pair mb-2 d-block">
              <img src="/assets/icons/12.svg" alt="icons" />
              <span className="ps-2">Pair Explorer</span>
            </Link>
            <Link to="uni-big-swap" className="pair mb-2 d-block">
              <img src="/assets/icons/12.svg" alt="icons" />
              <span className="ps-2">Big Swap Tools</span>
            </Link>
          </div>
        </div>

        <div className="card card-dark p-3 mb-4">
          <div className="card-head ">
            <div className="icon-wrapper-white me-3">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>
            <div className="centering-element">
              <span className="fw-bolder"> SUSHI </span>
              TOOLS
            </div>
          </div>
          <hr />
          <div className="body-card">
            <div className="search-wrapper mb-2 position-relative">
              <input type="text" className="form-control input-dark " placeholder="Search pair" />
              <i className="material-icons" style={{ top: '20%' }}>search</i>
            </div>
            <Link to="sushi-live-pair" className="pair mb-2 d-block">
              <img src="/assets/icons/11.svg" alt="icons" />
              <span className="ps-2 ">Live New Pairs</span>
            </Link>
            <Link to="sushi-pair-explorer" className="pair mb-2 d-block">
              <img src="/assets/icons/12.svg" alt="icons" />
              <span className="ps-2">Pair Explorer</span>
            </Link>
            <Link to="sushi-big-swap" className="pair mb-2 d-block">
              <img src="/assets/icons/12.svg" alt="icons" />
              <span className="ps-2">Big Swap Tools</span>
            </Link>
          </div>
        </div>

        <div className="card card-dark p-3 mb-4">
          <div className="card-head ">
            <div className="icon-wrapper-white me-3">
              <img src="/assets/logo_gram_dark.png" alt="icon" />
            </div>
            <div className="centering-element">
              <span className="fw-bolder"> COMMON </span>
              TOOLS
            </div>
          </div>
          <hr />
          <div className="body-card">
            <Link to="multiswap" className="pair mb-2 d-block">
              <img src="/assets/icons/13.svg" alt="icons" />
              <span className="ps-2 ">MultiSwap</span>
            </Link>
            <div className="pair mb-2 pointer">
              <img src="/assets/icons/01.svg" alt="icons" />
              <span className="ps-2">Wallet Information</span>
            </div>
            <div className="pair pointer">
              <img src="/assets/icons/14.svg" alt="icons" />
              <span className="ps-2">New Pairs Bot</span>
            </div>
          </div>
        </div>


      </div>

      <div className="col-md-4 col-sm-12 mb-4">
        <div className="card card-dark p-3 mb-4">
          <div className="d-flex flex-row w-100">
            <div className="w-50">
              <div className="card-head w-100">
                <div className="centering-element w-100">
                  <div>HOT</div>
                  <span className="fw-bolder"> UNI </span>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="card-head w-100">
                <div className="centering-element w-100">
                  <div>HOT</div>
                  <span className="fw-bolder"> SUSHI </span>
                </div>
              </div>
            </div>
          </div>
          <hr />

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

      <div className="col-md-4 col-sm-12 mb-4">
        <div className="card card-dark p-3">
          <div className="card-head w-100">
            <div className="centering-element w-100">
              <div>FEATURED</div>
              <span className="fw-bolder"> SPONSORS </span>
            </div>
          </div>

          <hr />

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
                  <button className="live-trading-button ml-auto">
                    <i className="material-icons">fiber_manual_record</i>
                    <span className="">Live Trading</span>
                  </button>
                </div>
                <div className="mb-2">GreenFi is the first Green DeFi hub on BSC. One transaction = 1 Tree planted</div>

                <div className="soc-icon">
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

            <hr />

            <div className="body-card text-center">
              <h6 className="fw-bolder pb-2">Do you want to be sponsored on ADAT?</h6>
              <p>Contact us:</p>
              <div className="soc-icon mt-3 centering-element">
                <div className="icon-wrapper-soc me-2 pointer">
                  <img src="/assets/icons/logo-mail.png" alt="logo" />
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
      </div>

    </div>
    
    <div className="row pt-4 px-4 row-no-padding ">

      <div className="col-md-4 col-sm-12 ">

        <div className="card card-dark p-3 mb-4">
          <div className="card-head ">
            <div className="icon-wrapper-white me-3">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>
            <div className="centering-element">
              <span className="fw-bolder"> BAKERYSWAP </span>
              TOOLS
            </div>
          </div>
          <hr />
          <div className="body-card p-4">
            <p className="text-center">Coming soon</p>
          </div>
        </div>

      </div>

      <div className="col-md-4 col-sm-12 mb-4">
        <div className="card card-dark p-3 mb-4">
          <div className="card-head ">
            <div className="icon-wrapper-white me-3">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>
            <div className="centering-element">
              <span className="fw-bolder"> BAKERYSWAP </span>
              TOOLS
            </div>
          </div>
          <hr />
          <div className="body-card p-4">
            <p className="text-center">Coming soon</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-12 mb-4">
        <div className="card card-dark p-3 mb-4">
          <div className="card-head ">
            <div className="icon-wrapper-white me-3">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>
            <div className="centering-element">
              <span className="fw-bolder"> BAKERYSWAP </span>
              TOOLS
            </div>
          </div>
          <hr />
          <div className="body-card p-4">
            <p className="text-center">Coming soon</p>
          </div>
        </div>  
      </div>

    </div>

    </>
  );
}
