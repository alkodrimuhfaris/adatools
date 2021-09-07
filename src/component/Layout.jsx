import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  useParams,
} from "react-router-dom";
import actions from "../redux/actions/index";
import Head from "./Head";
import LeftTab from "./LeftTab";
import Footer from "./Footer";
import Body from "./Body";
import { Container } from "react-bootstrap";
import TopSmallStandard from "./TopSmallStandard";
import TopSmallNewPair from "./TopSmallNewPair";

export default function Layout() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { parent: par1, child } = useParams();
  const [parent, setParent] = React.useState("ether");

  React.useEffect(() => {
    console.log("route changed!!!", par1);
    setParent(par1);
  }, [par1]);

  const [width, setWidth] = React.useState(window.screen.availWidth);
  const [expanded, setExpanded] = React.useState(false);
  const { page } = useSelector((state) => state.currentPage);
  const { theme } = useSelector((state) => state.theme);
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
    console.log("child component: " + child);
  }, [child]);

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
            <Container>
              {page === "pair-explorer" ? (
                <TopSmallNewPair />
              ) : (
                <TopSmallStandard
                  parent={parent}
                  setParent={(val) => setParent(val)}
                  isMobile={isMobile}
                />
              )}
            </Container>
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
