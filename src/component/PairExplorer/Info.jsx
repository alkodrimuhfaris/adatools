import React from "react";

export default function Info() {
  return (
    <div className="w-100">
      <div className="card card-dark card-info-code">
        <div className="card-head-np align-items-center justify-content-center py-3 px-3">
          <h4 className="fw-bolder p-0 m-0">$0.27772691</h4>
          <i className="material-icons up ms-2 f20">double_arrow</i>
        </div>

        <div className="gradient-line" />
        <div className="card-body">
          <div className="centering-element">
            <p style={{marginRight: '0.5em'}} className="text-red">(24h: -2.36%)</p>
            <p className="text-green">0.00011046 BNB</p>
          </div>

          <div>
            <div className="d-flex mt-2 justify-content-between">
              <p className="fw-bolder mb-2">Total liquidity :</p>
              <p>$3,300,722,40</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder mb-2">Daily volume : </p>
              <p>$3,300,722,40</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder mb-2">Pooled WBNB :</p>
              <p>$3,300,722,40</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder mb-2">Pooled ADAT :</p>
              <p>$3,300,722,40</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder mb-2">Total tx :</p>
              <p>$3,300,722,40</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder mb-2">Holders</p>
              <p>$3,300,722,40</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder mb-2">Market cap :</p>
              <p>$3,300,722,40</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bolder mb-2">Diluted market cap:</p>
              <p>$3,300,722,40</p>
            </div>
            <div className="text-center color-aqua ver-1 font-bold">View more info</div>
          </div>
        </div>
      </div>
    </div>
  );
}
