import React from "react";
import dataLife from "../dto/liveFairData";

export default function Table({ data = [] }) {
  const [rowData, setRowData] = React.useState([]);

  const RowData = [
    {
      field: "token",
      Text: () => <span>Token</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "listed",
      Text: () => <span>Listed Since</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "contract",
      Text: () => <span>Actions</span>,
      sortAsc: false,
      sortDesc: false,
      actions: null,
    },
    { field: "tokenPrice", Text: () => <span>Contract Detail</span> },
    {
      field: "actions",
      Text: () => (
        <span>
          Token Price: <span className="text-blue">BNB</span>{" "}
        </span>
      ),
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "contractDetails",
      Text: () => <span>Contract Details</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "liquidity",
      Text: () => <span>Total Liquidity</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "poolAmount",
      Text: () => <span>Pool Amount</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "poolVariation",
      Text: () => <span>Pool Variation</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
    },
    {
      field: "poolRemaining",
      Text: () => <span>Pool Remaining</span>,
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
        <tr className="table-head">
          {rowData.map((val, key) => {
            return <th key={key}>{val}</th>;
          })}
        </tr>
        <tr className="table-body">
          {rowData.map((val, key) => {
            return <td key={key}>{val}</td>;
          })}
        </tr>
        <tr className="table-body">
          {rowData.map((val, key) => {
            return <td key={key}>{val}</td>;
          })}
        </tr>
        <tr className="table-body">
          {rowData.map((val, key) => {
            return <td key={key}>{val}</td>;
          })}
        </tr>
        <tr className="table-body">
          {rowData.map((val, key) => {
            return <td key={key}>{val}</td>;
          })}
        </tr>
        <tr className="table-body">
          {rowData.map((val, key) => {
            return <td key={key}>{val}</td>;
          })}
        </tr>
        <tr className="table-body">
          {rowData.map((val, key) => {
            return <td key={key}>{val}</td>;
          })}
        </tr>
      </table>
    </div>
  );
}
