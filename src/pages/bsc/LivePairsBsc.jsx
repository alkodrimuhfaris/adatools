import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Table from "../../component/Table";

export default function LivePairsBsc(props) {
  const columns = [
    {
      dataField: "token",
      text: "Token",
      sort: true,
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
    },
    {
      dataField: "listed",
      text: "Listed Since",
      sort: true,
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
    },
    {
      text: "Actions",
      dataField: "id",
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
      formatter: () => {
        return (
          <div className="d-flex justify-content-between">
            <div className="icon-wrapper-table ">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>
            <div className="icon-wrapper-table mx-2">
              <img src="/assets/icons/bscscan.png" alt="icon" />
            </div>
            <div className="icon-wrapper-table me-2">
              <img src="/assets/icons/uniswap.png" alt="icon" />
            </div>
            <div className="icon-wrapper-table">
              <img src="/assets/icons/32.svg" alt="icon" />
            </div>
          </div>
        );
      },
    },
    {
      dataField: "contract",
      text: "Contract Details",
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
      formatter: () => {
        return (
          <div className="d-flex justify-content-between">
            <div className="icon-wrapper-table ">
              <img src="/assets/icons/21.svg" alt="icon" />
            </div>
            <div className="icon-wrapper-table mx-2">
              <img src="/assets/icons/20.svg" alt="icon" />
            </div>
            <div className="icon-wrapper-table me-2">
              <img src="/assets/icons/19.svg" alt="icon" />
            </div>
            <div className="icon-wrapper-table">
              <img src="/assets/icons/18.svg" alt="icon" />
            </div>
          </div>
        );
      },
    },
    {
      dataField: "tokenPrice",
      text: "Token Price: BNB",
      sort: true,
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
    },
    {
      dataField: "liquidity",
      text: "Total Liquidity",
      sort: true,
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
    },
    {
      dataField: "poolAmount",
      text: "Pool Amount",
      sort: true,
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
    },
    {
      dataField: "poolVariation",
      text: "Pool Variation",
      sort: true,
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
      formatter: (cell, row) => {
        if (cell === "0%")
          return (
            <div className="grey-0 text-center">
              <p className="text-center m-0"> {cell}</p>
            </div>
          );
        if (cell === "531.32%")
          return (
            <div className="green-0 text-center">
              <p className="text-center m-0"> {cell}</p>
            </div>
          );
        if (cell === "-100%")
          return (
            <div className="red-0 text-center">
              <p className="text-center m-0"> {cell}</p>
            </div>
          );
        return null;
      },
    },
    {
      dataField: "poolRemaining",
      text: "Pool Remaining",
      sort: true,
      headerClasses: "border-dark-purple",
      headerStyle: { textAlign: "center" },
      classes: "border-dark-purple text-center",
    },
  ];

  const bg = props.theme === "dark" ? "" : "light";

  return (
    <div className={`body-body ${bg} `}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-4">
          <h6 className="text-white">
            PANCAKESWAP POOL TOOLS {">"}
            <span className="text-blue ">LIVE NEW PAIRS</span>
          </h6>
          <div className="search-wrapper position-relative">
            <input
              type="text"
              className="form-control input-dark "
              placeholder="Filter by token"
            />
            <i className="material-icons">search</i>
          </div>
        </div>
        <p className="text-grey pb-5">
          Search for live new pairs and pool updates
        </p>

        <div className="">
          <Table />
        </div>

        <div style={{ height: 100, width: "100%" }} />
      </div>
    </div>
  );
}
