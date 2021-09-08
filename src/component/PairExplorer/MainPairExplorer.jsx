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

        <div className="top-main-explorer py-3">
          <div className="left-top-main-explorer">
            <div className="d-flex justify-content-end">
              <div className="icons-tab">
                <i className="material-icons me-2">share</i>
                <i className="material-icons">star</i>
              </div>
              <div className="trade-tab">TRADE</div>
            </div>

            <CardAdat />

            <div className="row">
              <div className="col-5 h-100">
                <Favorites />
              </div>

              <div className="col-7 h-100">
                <Info />
              </div>
            </div>
          </div>

          <div className="right-top-main-explorer">
            <Chart />
          </div>
        </div>

        <div className="bottom-main-explorer">
          <div className="left-bottom-main-explorer">
            <div className="row">
              {/* contract detail  */}
              <div className="col-md-4 col-lg-12">
                <ContractDetails />
              </div>

              {/* adat score  */}
              <div className="col-md-4 col-lg-12">
                <CardAdatScore />
              </div>
              {/* top sponsor  */}
              <div className="col-md-4 col-lg-12">
                <TopSponsor />
              </div>
              {/* faraland */}
              <div className="col-md-4 col-lg-12">
                <CardFaraland />
              </div>
              {/* token news  */}
              <div className="col-md-4 col-lg-12">
                <TokenNews />
              </div>
            </div>
          </div>

          <div className="right-bottom-main-explorer">
            <PairExplorerTable />
          </div>
        </div>
      </div>
    </div>
  );
}
