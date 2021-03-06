import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import actions from "../redux/actions";
import SvgIcon from "./SvgIcon";

export default function LeftTab(props) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const { parent, child } = useParams();

  const goToLandingPage = () => {
    window.location.href = "/";
  };

  const etherSidebar = [
    {
      icon: "../../assets/icons/10.svg",
      name: "ADATBOARD",
      to: "main",
    },
    {
      icon: "",
      name: "Uniswap",
      to: "",
    },
    {
      icon: "../../assets/icons/11.svg",
      name: "Live New Pairs",
      to: "uni-live-pair",
    },
    {
      icon: "../../assets/icons/12.svg",
      name: "Pair Explorer",
      to: "uni-pair-explorer",
    },
    {
      icon: "../../assets/icons/03.svg",
      name: "Big Swap Explorer",
      to: "uni-big-swap",
    },
    {
      icon: "",
      name: "Sushiswap",
      to: "",
    },
    {
      icon: "../../assets/icons/11.svg",
      name: "Live New Pairs",
      to: "sushi-live-pair",
    },
    {
      icon: "../../assets/icons/12.svg",
      name: "Pair Explorer",
      to: "sushi-pair-explorer",
    },
    {
      icon: "../../assets/icons/03.svg",
      name: "Big Swap Explorer",
      to: "sushi-big-swap",
    },
    {
      icon: "",
      name: "Common",
      to: "",
    },
    {
      icon: "../../assets/icons/13.svg",
      name: "Multiswap",
      to: "multiswap",
    },
    {
      icon: "../../assets/icons/14.svg",
      name: "New Pairs Bot",
      to: "",
    },
    {
      icon: "",
      name: "Others",
      to: "",
    },
    {
      icon: "../../assets/icons/15.svg",
      name: "User Account",
      to: "user",
    },
    {
      icon: "../../assets/icons/16.svg",
      name: "Configuration",
      to: "configuration",
    },
    {
      icon: "",
      name: "Theme",
      to: "",
    },
    {
      icon: "../../assets/icons/17.svg",
      name: "Theme Mode",
      to: "",
    },
    {
      icon: "/assets/icons/bsc.png",
      name: "BSC",
      to: {
        pathname: "/app/bsc/main",
      },
    },
    {
      icon: "/assets/icons/polygon.png",
      name: "Polygon",
      to: {
        pathname: `/app/bsc/${
          child !== "ether" || child !== "polygon" || child !== "bsc"
            ? child
            : "main"
        }`,
      },
    },
  ];

  const bscSidebar = [
    {
      icon: "../../assets/icons/10.svg",
      name: "ADATBOARD",
      to: "main",
    },
    {
      icon: "",
      name: "Pancakeswap",
      to: "",
    },
    {
      icon: "../../assets/icons/11.svg",
      name: "Live New Pairs",
      to: "live-pair",
    },
    {
      icon: "../../assets/icons/12.svg",
      name: "Pair Explorer",
      to: "pair-explorer",
    },
    {
      icon: "",
      name: "Common",
      to: "",
    },
    {
      icon: "../../assets/icons/13.svg",
      name: "Multiswap",
      to: "multiswap",
    },
    {
      icon: "../../assets/icons/14.svg",
      name: "New Pairs Bot",
      to: "",
    },
    {
      icon: "",
      name: "Others",
      to: "",
    },
    {
      icon: "../../assets/icons/15.svg",
      name: "User Account",
      to: "user",
    },
    {
      icon: "../../assets/icons/16.svg",
      name: "Configuration",
      to: "configuration",
    },
    {
      icon: "",
      name: "Theme",
      to: "",
    },
    {
      icon: "../../assets/icons/17.svg",
      name: "Theme Mode",
      to: "",
    },
    {
      icon: "/assets/icons/ethereum.png",
      name: "Ether",
      to: {
        pathname: "/app/ether/main",
      },
    },
    {
      icon: "/assets/icons/polygon.png",
      name: "Polygon",
      to: {
        pathname: `/app/polygon/${
          child !== "ether" || child !== "polygon" || child !== "bsc"
            ? child
            : "main"
        }`,
      },
    },
  ];

  const polySidebar = [
    {
      icon: "../../assets/icons/10.svg",
      name: "ADATBOARD",
      to: "main",
    },
    {
      icon: "",
      name: "Quickswap",
      to: "",
    },
    {
      icon: "../../assets/icons/11.svg",
      name: "Live New Pairs",
      to: "live-pair",
    },
    {
      icon: "../../assets/icons/12.svg",
      name: "Pair Explorer",
      to: "pair-explorer",
    },
    {
      icon: "",
      name: "Common",
      to: "",
    },
    {
      icon: "../../assets/icons/13.svg",
      name: "Multiswap",
      to: "multiswap",
    },
    {
      icon: "../../assets/icons/14.svg",
      name: "New Pairs Bot",
      to: "",
    },
    {
      icon: "",
      name: "Others",
      to: "",
    },
    {
      icon: "../../assets/icons/15.svg",
      name: "User Account",
      to: "user",
    },
    {
      icon: "../../assets/icons/16.svg",
      name: "Configuration",
      to: "configuration",
    },
    {
      icon: "",
      name: "Theme",
      to: "",
    },
    {
      icon: "../../assets/icons/17.svg",
      name: "Theme Mode",
      to: "",
    },
    {
      icon: "/assets/icons/ethereum.png",
      name: "Ether",
      to: {
        pathname: "/app/ether/main",
      },
    },
    {
      icon: "/assets/icons/bsc.png",
      name: "BSC",
      to: {
        pathname: `/app/bsc/${
          child !== "ether" || child !== "polygon" || child !== "bsc"
            ? child
            : "main"
        }`,
      },
    },
  ];

  const changeTheme = (val) => {
    dispatch(actions.theme.toggleTheme(theme));
    // props.setTheme(cur)
  };

  return (
    // <div className="left-tab-wrapper">
    <div
      className={
        props.isMobile
          ? props.expanded
            ? `left-tabs mobile ${props.theme} `
            : `d-none`
          : `left-tabs ${props.theme}`
      }
    >
      <div
        className={`brand-head pointer ${props.theme}`}
        onClick={goToLandingPage}
      >
        <img src="/assets/logo_gram.png" alt="logo" className="logo-only" />
        <img src="/assets/logo.png" alt="logo" className="logo-with-text" />
      </div>

      <div className={props.isMobile ? "" : `ver-1 left-tabs-menu`}>
        {parent === "bsc" &&
          bscSidebar.map((i, index) => {
            if (!i.icon && !i.to)
              return (
                <div key={index}>
                  <div className="tab-menu-not-hover ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );
            if (i.icon && !i.to)
              return (
                <div
                  key={index}
                  onClick={() => {
                    i.name === "New Pairs Bot" &&
                      window.open("https://web.telegram.org/");
                    i.name === "Theme Mode" && changeTheme();
                  }}
                >
                  <div className="tab-menu ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );
            if (i.to)
              return (
                <Link
                  key={index}
                  to={i.to}
                  onClick={() => {
                    i.to === "pair-explorer"
                      ? dispatch(
                          actions.currentPage.changePage("pair-explorer")
                        )
                      : dispatch(actions.currentPage.changePage("standard"));
                  }}
                  replace
                  className="link-wrap"
                >
                  <div className={child === i.to ? "t-selected " : "tab-menu "}>
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </Link>
              );
          })}

        {parent === "ether" &&
          etherSidebar.map((i, index) => {
            if (!i.icon && !i.to)
              return (
                <div key={index}>
                  <div className="tab-menu-not-hover ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );

            if (i.icon && !i.to)
              return (
                <div
                  key={index}
                  onClick={() => {
                    i.name === "New Pairs Bot" &&
                      window.open("https://web.telegram.org/");
                    i.name === "Theme Mode" && changeTheme();
                  }}
                >
                  <div className="tab-menu ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );
            if (i.icon && !i.to)
              return (
                <div
                  key={index}
                  onClick={() =>
                    i.name === "New Pairs Bot"
                      ? window.open("https://web.telegram.org/")
                      : null
                  }
                >
                  <div className="tab-menu ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );
            if (i.to)
              return (
                <Link
                  key={index}
                  to={i.to}
                  onClick={() => {
                    i.to === "uni-pair-explorer" ||
                    i.to === "sushi-pair-explorer"
                      ? dispatch(
                          actions.currentPage.changePage("pair-explorer")
                        )
                      : dispatch(actions.currentPage.changePage("standard"));
                  }}
                  replace
                  className="link-wrap"
                >
                  <div className={child === i.to ? "t-selected " : "tab-menu "}>
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </Link>
              );
          })}

        {parent === "polygon" &&
          polySidebar.map((i, index) => {
            if (!i.icon && !i.to)
              return (
                <div key={index}>
                  <div className="tab-menu-not-hover ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );
            if (i.icon && !i.to)
              return (
                <div
                  key={index}
                  onClick={() => {
                    i.name === "New Pairs Bot" &&
                      window.open("https://web.telegram.org/");
                    i.name === "Theme Mode" && changeTheme();
                  }}
                >
                  <div className="tab-menu ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );
            if (i.icon && !i.to)
              return (
                <div
                  key={index}
                  onClick={() =>
                    i.name === "New Pairs Bot"
                      ? window.open("https://web.telegram.org/")
                      : null
                  }
                >
                  <div className="tab-menu ">
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </div>
              );
            if (i.to)
              return (
                <Link
                  key={index}
                  to={i.to}
                  onClick={() => {
                    i.to === "pair-explorer"
                      ? dispatch(
                          actions.currentPage.changePage("pair-explorer")
                        )
                      : dispatch(actions.currentPage.changePage("standard"));
                  }}
                  replace
                  className="link-wrap"
                >
                  <div className={child === i.to ? "t-selected " : "tab-menu "}>
                    {i.icon !== "" && <SvgIcon src={i.icon} />}
                    <p className={`text-menu ${props.theme}`}>{i.name} </p>
                  </div>
                </Link>
              );
          })}
      </div>
    </div>
  );
}
