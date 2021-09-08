import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import AdatToken from "./component/AdatToken";

import FeaturesMenu from "./component/FeaturesMenu";
import RoadMap from "./component/RoadMap";

import SvgIconArrow from "./component/SvgIconArrow";
import SvgIconCustom from "./component/SvgIconCustom";
import UserPlans from "./component/UserPlans";
import useVisibility from "./helpers/useVisibilityRef";

export default function Main() {
  const goToDashboard = () => {
    window.location.href = "/app/bsc/main";
  };
  const [refTop, topIsStilVisible] = useVisibility({ treshold: 1 });

  return (
    <>
      {/* navbar  */}
      <div
        className={`raleway-font pt-2 navbar-landing ${
          topIsStilVisible ? "" : "shadow"
        }`}
      >
        <Navbar className="navbar-dark" style={{ zIndex: 99 }} expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/assets/logo.png"
                height="30"
                className="d-inline-block align-top"
                alt="ADA Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="responsive-navbar-nav"
            >
              <Nav>
                <Nav.Link
                  href="#home"
                  className="text-white mx-1 fw-bolder"
                  onClick={goToDashboard}
                >
                  App ADA Tools
                </Nav.Link>
                <Nav.Link
                  href="#features"
                  className="text-white mx-1 fw-bolder"
                >
                  Manifesto
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white mx-1 fw-bolder">
                  ADAT Token
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-white mx-1 fw-bolder">
                  Contact
                </Nav.Link>
                <Button
                  className="button-blue mx-1 fw-bolder"
                  onClick={goToDashboard}
                >
                  Launch App
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div ref={refTop} className="bg-purple w-100 pt-8 lato-font">
        <div className="container my-0 layout-resp">
          <div className="left-side ">
            <h1 className="big-text mb-3">BOOST YOUR <br /> EXCHANGE <br /> EXPERIENCE</h1>
            <p className="mb-0">
            </p>
            <p className="mb-4 mt-2">
              Real time data analysis at the tips of your fingers: <br />
              Create unique trading strategies, anticipate market movements, <br />
              search for big spreads, track and copy the most profitable wallets <br />
              and much more.
            </p>
            <Button
              className="button-blue launch-app-btn mx-1 fw-bolder"
              onClick={goToDashboard}
            >
              Launch App
            </Button>
          </div>
          <div className="right-side">
            <img
              src="/assets/hero_illustration.png"
              alt="Illustration"
              className="img-illustration"
            />
          </div>
        </div>

        <button className="expand-more">
          {/* <ArrowExpand className="text-white" /> */}
          <SvgIconArrow />
        </button>

        <div className="text-white text-center container container ver-1 font-large mb-4">
          <p className="py-2 px-5">
            If you are an ADA user, and you want to be able to anticipate market
            <br />
            movements and develop better trading strategies, ADA Tools will help
            <br />
            you in a very simple way
          </p>
        </div>

        <div className="how-wrap">
          <div className="how-wrapper">
            <div className="mx-2">
              <img className="mb-2" src="/assets/how_5.png" alt="responsive" />
              <h4 className="mt-3">RESPONSIVE</h4>
              <p>ADA Tools works on any device: desktop, tablet or mobile.</p>
            </div>
            <div className="mx-2">
              <img className="mb-2" src="/assets/how_4.png" alt="responsive" />
              <h4 className="mt-3">SUBSCRIPTION</h4>
              <p>Purchase ADAT via exchanges to enable ADAT subscriptions.</p>
            </div>
            <div className="mx-2">
              <img className="mb-2" src="/assets/how_3.png" alt="responsive" />
              <h4 className="mt-3">STORE YOUR DATA</h4>
              <p>Save your data and access it from any device.</p>
            </div>
            <div className="mx-2">
              <img className="mb-2" src="/assets/how_2.png" alt="responsive" />
              <h4 className="mt-3">NOTIFICATIONS</h4>
              <p>Set up your live notifications.</p>
            </div>
            <div className="mx-2">
              <img className="mb-2" src="/assets/how_1.png" alt="responsive" />
              <h4 className="mt-3">BOTS</h4>
              <p>Create unique trading strategies for maximum profitability.</p>
            </div>
          </div>
        </div>
      </div>

      <Container className="w1-100">
        <p className="features-title font-title text-spaced purple-text ver-1">
          FEATURES
        </p>
        <FeaturesMenu />
        {/* <div className="mb-5 w-100">
        </div> */}
      </Container>

      <div className="bg-purple w-100 overflow-hidden user-plan-wrap">
        <div className="bg1">
          <img src="/assets/bg1.png" alt="background" />
        </div>
        <Container className="user-plan-wrap-2 pt-3">
          {/* <div className="material-icons arrow-down-white text-center">arrow_drop_down</div> */}

          <p className="sub-size text-center pt-5 mb-0 ver-1 font-title text-spaced text-white">
            USER PLANS
          </p>
          <p className="text-center text-white mb-4 mt-2">
            Choose your subscription tier and upgrade now!
          </p>

          <UserPlans />

          <div className="f-small text-white text-center mt-5 pb-5">
            *Hold means that you must have the neccessary token in your wallet
            at the time of sign in and login, this<br />process will be done through
            any compatible wallet.
          </div>
        </Container>
      </div>

      <div className="bg-black w-100 overflow-hidden roadmap-wrap">
        <div className="bg2">
          <img src="/assets/bg2.png" alt="background" />
        </div>
        <Container className="roadmap-wrap-2 pt-5">
          <div className="roadmap-title ver-1 text-spaced font-title">
            ROADMAP
          </div>

          <RoadMap />

          <div className="mt-5 f-small text-white text-center pb-5">
            This is a floating roadmap, so timelines are flexible. This is
            beacouse we must be agile and responsive to industry, technological
            and <br /> community needs. In fact, many of our existing and feature
            features are community requests. So please do understand that this <br />
            roadmap, espescially for items outside of imminent release, is
            subject to charge.
          </div>
        </Container>
      </div>

      <div className="bg-grey w-100 overflow-hidden adat-token-wrap">
        <div className="adat-token-title container pt-5 ver-1 purple-text text-spaced-sm font-title">
          ADAT TOKEN
        </div>

        <AdatToken />
      </div>

      <div className="safegram-wrap w-100 overflow-hidden">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <p className="ver-1 font-pretty-large text-spaced-sm">PARTNER</p>
          <img
            src="/assets/safegram_logo.png"
            className="mt-3"
            width="300px"
            alt="safegram"
          />
        </div>
      </div>

      <div className="bg-purple w-100 overflow-hidden pt-5">
        <Container>
          <p className="footer-text">
            All contents are available on our website, on hyperlinked websites,
            and on applications, forums, blogs, social media accounts, and other
            platform associated with ADA Tools is intended solely to provide you
            with general information. We make no warranties of any kind with
            respect to our content, including but not limited to, the accuracy
            and currency of the information. None of the content we provide
            should be construed as financial, legal, or any other type of advice
            on which you may spesifically rely on any purpose. Any use or
            reliance you place of our content is solely at your own risk. What
            you should do is conduct your our research, review and analysis, and
            verify our content before relying on it. Trading is a high-risk
            activity that can result in significant losses. So you should
            consult with your financial advisor before making any decisions.
            Nothing on our site should be considered an invitation or offer to
            take any action.
          </p>

          <div className="footer-wrapper mt-4">
            <p className="footer-text">
              <p className="d-flex ver-1 font-litle-large ms-1">
                <span style={{fontSize: '1em', paddingTop: '0.23em'}} className="material-icons">copyright</span>
                <span
                  style={{ marginLeft: "0.5em" }}
                  className="font-bold ver-1"
                >
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
                    src="assets/telegram.svg"
                  />
                </a>
                {/* <img src="/assets/icons/logo-telegram.png" alt="logo" /> */}
              </div>
              <div className="icon-wrapper-soc mx-2">
                <a className="icon-footer-wrapper" href="#">
                  <SvgIconCustom
                    className={["icon-footer"]}
                    src="assets/medium.svg"
                  />
                </a>
                {/* <img src="/assets/icons/logo-medium.png" alt="logo" /> */}
              </div>
              <div className="icon-wrapper-soc ms-2">
                <a className="icon-footer-wrapper" href="#">
                  <SvgIconCustom
                    className={["icon-footer"]}
                    src="assets/twitter.svg"
                  />
                </a>
                {/* <img src="/assets/icons/logo-twitter.png" alt="logo" /> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
