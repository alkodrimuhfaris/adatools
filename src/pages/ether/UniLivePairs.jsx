import React from 'react'
import { useSelector } from 'react-redux';
import Table from '../../component/Table';

export default function UniLivePairs() {
  const { theme } = useSelector((state) => state.theme);
  
  return (
    <div className={`body-body ${theme}`}>

      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-4">
          <h6 className="text-white">UNISWAP POOL TOOLS {'>'} 
            <span className="text-blue ">
              LIVE NEW PAIRS
            </span>
          </h6>
          <div className="search-wrapper position-relative">
            <input type="text" className="form-control input-dark " placeholder="Filter by token" />
            <i className="material-icons">search</i>
          </div>
        </div>
        <p className="text-grey pb-5">Search for live new pairs and pool updates</p>

        <Table />

        <div style={{ height: '4em', width: "100%" }} />
      </div>
    </div>

   );
}
