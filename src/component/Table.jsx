import React from "react";
import dataLife from "../dto/liveFairData";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import Pagination from "./Pagination";
import HeadTable from "./HeadTable";
import SvgIconCustom from "./SvgIconCustom";

export default function Table({ data = [] }) {
  const dispatch = useDispatch();
  const [rowData, setRowData] = React.useState([]);
  const {
    liveFairPage: currentPage,
    liveFairOrderBy: orderBy,
    liveFairOrderIn: orderIn,
  } = useSelector((state) => state.pagination);

  const setOrder = (ob, oi) => {
    dispatch(actions.tablePagination.livePairsOrderBy(ob));
    dispatch(actions.tablePagination.livePairsOrderIn(oi));
  };

  const RowData = [
    {
      field: "token",
      Text: () => <span className="pg-button-wrapper">Token</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values token">{data}</span>
      ),
    },
    {
      field: "listed",
      Text: () => <span className="pg-button-wrapper">Listed Since</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values listed">{data}</span>
      ),
    },
    {
      field: "actions",
      Text: () => <span className="pg-button-wrapper">Actions</span>,
      sortAsc: false,
      sortDesc: false,
      actions: null,
      Value: ({
        data = [],
        toolTips = ["desc-1", "desc-2", "desc-3", "desc-4"],
      }) => (
        <span className="col-values actions">
          <div className="icon-table-container">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
              }}
              className="icon-wrapper-table "
            >
              <img src="/assets/pancake.png" alt="icon" />
            </button>
            <div className="tooltip-table">{toolTips[0]}</div>
          </div>
          <div className="icon-table-container">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
              }}
              className="icon-wrapper-table"
            >
              <img src="/assets/icons/bscscan.png" alt="icon" />
            </button>
            <div className="tooltip-table">{toolTips[1]}</div>
          </div>
          <div className="icon-table-container">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
              }}
              className="icon-wrapper-table"
            >
              <img src="/assets/icons/uniswap.png" alt="icon" />
            </button>
            <div className="tooltip-table">{toolTips[2]}</div>
          </div>
          <div className="icon-table-container">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
              }}
              className="icon-wrapper-table chain"
            >
              <SvgIconCustom
                src="/assets/chain.svg"
                className={["icon-chain"]}
              />
            </button>
            <div className="tooltip-table">{toolTips[3]}</div>
          </div>
        </span>
      ),
    },
    {
      field: "contractDetails",
      Text: () => <span className="pg-button-wrapper">Contract Details</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({
        data = [],
        toolTips = ["desc-1", "desc-2", "desc-3", "desc-4"],
      }) => (
        <span className="col-values contract-details">
          <div className="icon-table-container">
            <div
              className={`icon-wrapper-table contract ${
                data[0] ? "" : "disable"
              }`}
            >
              <SvgIconCustom
                src="/assets/icons/21.svg"
                className={["icon-contract"]}
              />
            </div>
            <div className="tooltip-table">{toolTips[0]}</div>
          </div>
          <div className="icon-table-container">
            <div
              className={`icon-wrapper-table contract ${
                data[1] ? "" : "disable"
              }`}
            >
              <SvgIconCustom
                src="/assets/icons/20.svg"
                className={["icon-contract"]}
              />
            </div>
            <div className="tooltip-table">{toolTips[1]}</div>
          </div>
          <div className="icon-table-container">
            <div
              className={`icon-wrapper-table contract ${
                data[2] ? "" : "disable"
              }`}
            >
              <SvgIconCustom
                src="/assets/icons/19.svg"
                className={["icon-contract"]}
              />
            </div>
            <div className="tooltip-table">{toolTips[2]}</div>
          </div>
          <div className="icon-table-container">
            <div
              className={`icon-wrapper-table contract ${
                data[3] ? "" : "disable"
              }`}
            >
              <SvgIconCustom
                src="/assets/icons/18.svg"
                className={["icon-contract"]}
              />
            </div>
            <div className="tooltip-table">{toolTips[3]}</div>
          </div>
        </span>
      ),
    },
    {
      field: "tokenPrice",
      Text: () => (
        <span className="pg-button-wrapper">
          Token Price: <span className="text-blue">BNB</span>{" "}
        </span>
      ),
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values token-price">{data}</span>
      ),
    },
    {
      field: "liquidity",
      Text: () => <span className="pg-button-wrapper">Total Liquidity</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values liquidity">{data}</span>
      ),
    },
    {
      field: "poolAmount",
      Text: () => <span className="pg-button-wrapper">Pool Amount</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values pool-amount">{data}</span>
      ),
    },
    {
      field: "poolVariation",
      Text: () => <span className="pg-button-wrapper">Pool Variation</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "-40%" }) => {
        data = parseFloat(data);
        return (
          <span className="col-values pool-variation">
            <span
              className={`pool-var-cover ${
                data < 0
                  ? "danger"
                  : data >= 0 && data < 50
                  ? "normal"
                  : data >= 50
                  ? "good"
                  : "normal"
              }`}
            >
              {data}%
            </span>
          </span>
        );
      },
    },
    {
      field: "poolRemaining",
      Text: () => <span className="pg-button-wrapper">Pool Remaining</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values pool-remaining">{data}</span>
      ),
    },
  ];

  React.useEffect(() => {
    const nRow = [];
    for (let el in dataLife[0]) {
      if (el === "id") {
        continue;
      } else {
        nRow.push(el);
      }
    }
    setRowData(nRow);
    console.log(nRow);
  }, []);

  return (
    <div className="table-stylized shadow-no-stylized w-100">
      <table className="w-100">
        <thead className="table-head">
          <tr>
            {RowData.map((val, key) => {
              const { Text, sortAsc, sortDesc } = val;
              return (
                <th key={key}>
                  <HeadTable
                    Text={() => <Text />}
                    orderAsc={sortAsc}
                    orderDesc={sortDesc}
                    setOrder={key === orderBy}
                    orderIn={orderIn}
                    orderBtn={(n) => {
                      setOrder(key, n);
                    }}
                  />
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody
          style={{ maxHeight: 300, height: "auto" }}
          className="table-body"
        >
          {dataLife.map((val1, key1) => {
            return (
              <tr key={key1}>
                {RowData.map((val2, key2) => {
                  const data = [null];
                  const { Value } = val2;
                  for (let field1 in val1) {
                    if (field1 === val2.field) {
                      data[0] = val1[field1];
                    }
                  }
                  return (
                    <td key={key2}>
                      <Value data={data[0]} />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot className="table-foot">
          <tr>
            <td colSpan={RowData.length}>
              <div className="d-flex align-items-center justify-content-end">
                <Pagination
                  page={currentPage}
                  maxPage={10}
                  pageAction={(val) =>
                    dispatch(actions.tablePagination.livePairs(val))
                  }
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
