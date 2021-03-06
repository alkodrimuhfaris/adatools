import React from "react";
import dataPair from "../dto/pairExplorerData";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import Pagination from "./Pagination";
import HeadTable from "./HeadTable";
import SvgIconCustom from "./SvgIconCustom";
import OthersTable from "./PairExplorer/OthersTable";

export default function TablePairExplorer({ data = [] }) {
  const dispatch = useDispatch();
  const [rowData, setRowData] = React.useState([]);
  const {
    pairExplorerPage: currentPage,
    pairExplorerBy: orderBy,
    pairExplorerIn: orderIn,
  } = useSelector((state) => state.pagination);

  const setOrder = (ob, oi) => {
    dispatch(actions.tablePagination.pairExplorerBy(ob));
    dispatch(actions.tablePagination.pairExplorerOrderIn(oi));
  };

  const RowData = [
    {
      field: "date",
      Text: () => <span className="pg-button-wrapper">Date</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values clear date">{data}</span>
      ),
    },
    {
      field: "type",
      Text: () => <span className="pg-button-wrapper">Type</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "data" }) => {
        return (
          <span
            className={`col-values clear type ${
              data === "Sell" ? "sell" : "buy"
            }`}
          >
            <span>{data}</span>
          </span>
        );
      },
    },
    {
      field: "priceUSD",
      Text: () => (
        <span className="pg-button-wrapper">
          Price <span className="text-blue">USD</span>
        </span>
      ),
      sortAsc: false,
      sortDesc: false,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values clear priceUSD">{data}</span>
      ),
    },
    {
      field: "priceBNB",
      Text: () => (
        <span className="pg-button-wrapper">
          Price <span className="text-blue">BNB</span>
        </span>
      ),
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values clear priceBNB">{data}</span>
      ),
    },
    {
      field: "amount",
      Text: () => (
        <span className="pg-button-wrapper">
          Amount <span className="text-blue">ADAT</span>
        </span>
      ),
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => (
        <span className="col-values clear amount">{data}</span>
      ),
    },
    {
      field: "totalBNB",
      Text: () => (
        <span className="pg-button-wrapper">
          Total <span className="text-blue">BNB</span>
        </span>
      ),
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test", idx = 0 }) => (
        <div className="col-values clear d-flex align-items-center justify-content-between w-100 totalBNB">
          <div className="data">{data}</div>
          <div className="icon">
            {idx % 3 === 0 ? (
              <div className="icon-totalbnb-wrapper">
                <SvgIconCustom
                  className={["icon-totalbnb"]}
                  src={"/assets/anonymous.svg"}
                />
              </div>
            ) : null}
          </div>
        </div>
      ),
    },
    {
      field: "maker",
      Text: () => <span className="pg-button-wrapper">Maker</span>,
      sortAsc: true,
      sortDesc: true,
      actions: null,
      Value: ({ data = "test" }) => {
        function middleElipsis(str) {
          if (str.length > 10) {
            return (
              str.substr(0, 5) + "..." + str.substr(str.length - 4, str.length)
            );
          }
          return str;
        }
        return (
          <span className="col-values clear maker">
            <span className="maker-ellipsed text-blue">
              {middleElipsis(data)}
            </span>
            <span className="tooltip-table">{data}</span>
          </span>
        );
      },
    },
    {
      field: "others",
      Text: () => <span className="pg-button-wrapper">Others</span>,
      sortAsc: false,
      sortDesc: false,
      actions: null,
      Value: ({
        data = [],
        toolTips = [
          "desc-1",
          "desc-2",
          "desc-3",
          "desc-4aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        ],
        idx = 0,
      }) => <OthersTable idx={idx} data={data} toolTips={toolTips} />,
    },
  ];

  React.useEffect(() => {
    const nRow = [];
    for (let el in dataPair[0]) {
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
    <div
      style={{ maxHeight: 1117 }}
      className="table-stylized shadow-no-stylized w-100"
    >
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
          {dataPair.map((val1, key1) => {
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
                      <Value idx={key1} data={data[0]} />
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
                    dispatch(actions.tablePagination.pairExplorer(val))
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
