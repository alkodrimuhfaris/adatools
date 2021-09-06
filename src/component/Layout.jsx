import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  useLocation,
  useRouteMatch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import actions from "../redux/actions/index";
import Head from "./Head";
import LeftTab from "./LeftTab";
import Footer from "./Footer";
import Body from "./Body";

export default function Layout() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { parent: par1, child } = useParams();

  const [width, setWidth] = React.useState(window.screen.availWidth);
  const [expanded, setExpanded] = React.useState(false);
  const { theme } = useSelector((state) => state.theme);
  const [parent, setParent] = React.useState("");

  const setTheme = () => {
    dispatch(actions.theme.toggleTheme(theme));
  };
  // const [theme, setTheme] = React.useState("dark");

  console.log("theme", theme);

  if (pathname === "/app") {
    window.location.href = "/app/bsc";
  }

  React.useEffect(() => {
    // window.addEventListener("scroll", (event) => {
    //   if (window?.scrollY > 70) setButtonVisible(true)
    //   if (window?.scrollY < 70) setButtonVisible(false)
    // });
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  React.useEffect(() => {
    console.log("route changed!!!", par1);
    setParent(par1);
  }, [par1]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const changeTheme = (val) => {
    console.log("called");
    setTheme(val);
  };

  const isMobile = width <= 768;

  const background = theme === "dark" ? "bg-160b2c" : "light";

  let classRight = isMobile
    ? `right-body ${background}`
    : `right-body desktop ${background}`;

  return (
    <Router>
      {/* head */}
      <Head isMobile={isMobile} />

      {/* body  */}
      <div className="d-flex position-relative h-100 parent">
        <button
          className="button-expand-mobile"
          onClick={() => setExpanded(!expanded)}
        >
          <i className="material-icons">menu</i>
        </button>

        <Route exact path="/app/:parent/:child">
          <LeftTab
            isMobile={isMobile}
            expanded={expanded}
            setExpanded={(val) => setExpanded(val)}
            setTheme={(val) => changeTheme(val)}
            theme={theme}
          />
        </Route>

        {/* right body  */}
        <div className={`${classRight}`}>
          <div className="top-small">
            <div className="container d-flex justify-content-between">
              <div className="d-flex text-white">
                <Link
                  className="ver-1 text-decoration-none text-white"
                  to={`/app/ether/main`}
                  replace
                >
                  <div
                    className={
                      parent === "ether"
                        ? "me-3 tab-top-selected"
                        : "me-3 pointer"
                    }
                    onClick={
                      parent !== "ether" ? () => setParent("ether") : null
                    }
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
                      parent === "bsc"
                        ? "me-3 tab-top-selected"
                        : "me-3 pointer"
                    }
                    onClick={parent !== "bsc" ? () => setParent("bsc") : null}
                  >
                    <img
                      src="/assets/icons/bsc.png"
                      alt="bsc"
                      className="logo-ether"
                    />
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
                      parent === "polygon"
                        ? "me-3 tab-top-selected"
                        : "me-3 pointer"
                    }
                    onClick={
                      parent !== "polygon" ? () => setParent("polygon") : null
                    }
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
              <div
                className={
                  isMobile ? "d-none" : "top-right-text-container"
                }
              >
                <div className="top-right-text">
                  <span className="text-white">Next ADATShare: </span>
                  <span className="text-blue">
                    2021-09-01 - 1,252,964 ADAT{" "}
                  </span>
                  <span className="text-white">| Next Token Burn: </span>
                  <span className="text-blue">2021-09-01 - 28,107 ADAT</span>
                </div>
              </div>
            </div>
          </div>

          <Route exact path="/app/:parent/:child">
            <Body setTheme={(val) => changeTheme(val)} theme={theme} />
          </Route>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
