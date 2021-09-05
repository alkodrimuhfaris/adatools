import React from "react";
import dataLife from "../dto/liveFairData";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import Pagination from "./Pagination";

export default function Table({ data = [] }) {
  const dispatch = useDispatch();
  const [rowData, setRowData] = React.useState([]);
  const { liveFairPage: currentPage } = useSelector(
    (state) => state.pagination
  );

  const RowData = [
    {
      field: "token",
      Text: () => <span className="pg-button-wrapper">Token</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "listed",
      Text: () => <span className="pg-button-wrapper">Listed Since</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "contract",
      Text: () => <span className="pg-button-wrapper">Actions</span>,
      sortAsc: false,
      sortDesc: false,
      actions: null,
    },
    {
      field: "tokenPrice",
      Text: () => <span className="pg-button-wrapper">Contract Detail</span>,
    },
    {
      field: "actions",
      Text: () => (
        <span className="pg-button-wrapper">
          Token Price: <span className="text-blue">BNB</span>{" "}
        </span>
      ),
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "contractDetails",
      Text: () => <span className="pg-button-wrapper">Contract Details</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "liquidity",
      Text: () => <span className="pg-button-wrapper">Total Liquidity</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "poolAmount",
      Text: () => <span className="pg-button-wrapper">Pool Amount</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "poolVariation",
      Text: () => <span className="pg-button-wrapper">Pool Variation</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "poolRemaining",
      Text: () => <span className="pg-button-wrapper">Pool Remaining</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
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
    <div className="table-stylized w-100">
      <table className="w-100">
        <thead className="table-head">
          <tr>
            {rowData.map((val, key) => {
              return <th key={key}>{val}</th>;
            })}
          </tr>
        </thead>

        <tbody style={{maxHeight: 300, height: 'auto'}} className="table-body">
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
          <tr>
            {rowData.map((val, key) => {
              return <td key={key}>{val}</td>;
            })}
          </tr>
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

