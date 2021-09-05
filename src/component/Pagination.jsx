import React from "react";

export default function Pagination({
  page = 1,
  maxPage = 2,
  pageAction = () => null,
}) {
  const [pages, setPages] = React.useState([1, 2, 3, 4, 5]);
  const [prevElipsis, setPrevElipsis] = React.useState(false);
  const [nextElipsis, setNextElipsis] = React.useState(false);

  React.useEffect(() => {
    if (maxPage <= 5) {
      const p = [];
      for (let i = 1; i <= maxPage; i++) {
        p.push(i);
      }
      setPages(p);
    } else if (page <= 3 && maxPage > 5) {
      setPages([1, 2, 3, 4, 5]);
      setPrevElipsis(false);
      if (maxPage > 5) {
        setNextElipsis(true);
      }
    } else if (maxPage - page <= 2 && maxPage > 5) {
      const p = [];
      for (let i = maxPage - 4; i <= maxPage; i++) {
        p.push(i);
      }
      setPages(p);
      setNextElipsis(false);
      if (maxPage - 5 > 1) {
        setPrevElipsis(true);
      }
    } else {
      const p = [];
      for (let i = page - 2; i <= page + 2; i++) {
        p.push(i);
      }
      setPages(p);
    }
  }, [page, maxPage]);

  return (
    <div className="pagination">
      <span className="pg-button-wrapper">
        <button
          disabled={page === 1}
          type="button"
          onClick={() => {
            pageAction(1);
          }}
          className={`button-pagination ${!(page === 1) ? "" : "disabled"}`}
        >
          <i className="material-icons">skip_previous</i>
        </button>
      </span>
      <span className="pg-button-wrapper">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => {
            pageAction(page - 1);
          }}
          className={`button-pagination ${!(page === 1) ? "" : "disabled"}`}
        >
          <i className="material-icons">chevron_left</i>
        </button>
      </span>
      {!prevElipsis ? null : <span className="pg-button-wrapper">...</span>}
      {pages.map((val, idx) => (
        <span key={idx} className={`pg-button-wrapper`}>
          <button
            type="button"
            onClick={() => {
              pageAction(val);
            }}
            className={`button-pagination ${page === val ? "current" : ""}`}
          >
            <span className="button-inside m-0">{val}</span>
          </button>
        </span>
      ))}
      {!nextElipsis ? null : <span className="pg-button-wrapper">...</span>}
      <span className="pg-button-wrapper">
        <button
          disabled={page === maxPage}
          type="button"
          onClick={() => {
            pageAction(page + 1);
          }}
          className={`button-pagination ${!page === maxPage ? "" : "disabled"}`}
        >
          <i className="material-icons">chevron_right</i>
        </button>
      </span>
      <span className="pg-button-wrapper">
        <button
          disabled={page === maxPage}
          type="button"
          onClick={() => {
            pageAction(maxPage);
          }}
          className={`button-pagination ${
            !(page === maxPage) ? "" : "disabled"
          }`}
        >
          <i className="material-icons">skip_next</i>
        </button>
      </span>
    </div>
  );
}
