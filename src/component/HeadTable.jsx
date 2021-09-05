import React from "react";

function HeadTable({
  Text = () => <span />,
  setOrder = false,
  orderIn = "asc",
  orderAsc = true,
  orderDesc = true,
  orderBtn = (val) => val,
}) {
  return (
    <div
      className={`col-table d-flex align-items-center ${
        orderAsc || orderDesc ? "justify-content-between" : "justify-content-center"
      }`}
    >
      <Text />
      <div
        className={`order-by d-flex flex-column align-items-center justify-content-center ${
          orderAsc || orderDesc ? "" : "d-none"
        }`}
      >
        <button
          type="button"
          className="order-button"
          onClick={() => orderBtn("asc")}
        >
          {orderAsc ? (
            <span
              className={`material-icons ${
                setOrder && orderIn === "asc" ? "text-blue" : ""
              }`}
            >
              expand_less
            </span>
          ) : (
            <span>&nbsp;</span>
          )}
        </button>
        <button
          type="button"
          className="order-button"
          onClick={() => orderBtn("dsc")}
        >
          {orderDesc ? (
            <span
              className={`material-icons ${
                setOrder && orderIn === "dsc" ? "text-blue" : ""
              }`}
            >
              expand_more
            </span>
          ) : (
            <span>&nbsp;</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default React.memo(HeadTable)
