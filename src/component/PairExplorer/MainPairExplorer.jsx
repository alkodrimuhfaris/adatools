import React from "react";
import CardAdat from "./CardAdat";
import CardAdatScore from "./CardAdatScore";
import CardFaraland from "./CardFaraland";
import Chart from "./Chart";
import ContractDetails from "./ContractDetails";
import Favorites from "./Favorites";
import Info from "./Info";
import TokenNews from "./TokenNews";
import TopSponsor from "./TopSponsor";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";
import PairExplorerTable from "./PairExplorerTable";

export default function MainPairExplorer({ theme }) {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.currentPage);

  React.useEffect(() => {
    if (page !== "pair-explorer") {
      dispatch(actions.currentPage.changePage("pair-explorer"));
    }
  }, [page]);

  return (
    <div className={`body-body pb-5 ${theme}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-4">
          <h6 className="text-white">
            PANCAKESWAP SWAP {">"}
            <span className="text-blue ">PAIR EXPLORER</span>
          </h6>
          <div className="search-wrapper">
            <div className="refresh-div-search">
              <span className="material-icons refresh-icon">autorenew</span>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                className="form-control input-dark "
                placeholder="Search pair"
              />
              <i className="material-icons">search</i>
            </div>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-6 col-md-12 col-lg-6">
            <div className="d-flex justify-content-end">
              <div className="icons-tab">
                <i className="material-icons me-2">share</i>
                <i className="material-icons">star</i>
              </div>
              <div className="trade-tab">TRADE</div>
            </div>

            <CardAdat />

            <div className="row">
              <div className="col-6 h-100">
                <Favorites />
              </div>

              <div className="col-6 h-100">
                <Info />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-6 pt-4">
            <Chart />
          </div>
        </div>

        <div className="row">
          <div className="col-12 my-4 my-lg-0 col-md-12 order-md-2 order-lg-1 col-lg-3">
            {/* contract detail  */}
            <ContractDetails />

            {/* adat score  */}
            <CardAdatScore />

            {/* top sponsor  */}
            <TopSponsor />

            {/* faraland */}
            <CardFaraland />

            {/* token news  */}
            <TokenNews />
          </div>

          <div className="col-12 col-md-12 col-lg-9 order-md-1 order-lg-2 h-100">
            <PairExplorerTable />
          </div>
        </div>
      </div>
    </div>
  );
}
