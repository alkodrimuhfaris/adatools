import React from "react";
import {
  Button,
  Card,
} from "react-bootstrap";
import Chart from "../component/Chart";
const data = [
  { value: 67.5, label: "Circulating", color: "#00D6FF" },
  { value: 9.8, label: "Liberated", color: "#FFE468" },
  { value: 2.7, label: "ADATShare", color: "#BB40AC" },
  { value: 6.7, label: "Marketing", color: "#9D8FE9" },
  { value: 13.4, label: "Development", color: "#FF5168" },
];

export default function AdatToken() {
  return (
    <div className="container adat-wrapper" style={{ minHeight: "300px" }}>
      <div className="adat-left">
        <div className="wrapper">
          <p className="name">Token Name:</p>
          <p className="contain">ADAT</p>
        </div>
        <div className="wrapper">
          <p className="name">Contract:</p>
          <p className="contain">0xvdclwha72v3j29..</p>
        </div>
        <div className="wrapper">
          <p className="name">Total Supply:</p>
          <p className="contain">150,000,000 ADAT</p>
        </div>
        <div className="wrapper">
          <p className="name">Circulating Supply:</p>
          <p className="contain">150,000,000 ADAT</p>
        </div>
        <div className="my-4 desc">
          ADAT Token is neccessary to access subscription tiers and benefit from
          unlocking all of the features of the ADAT ecosystem.
        </div>

        <Button className="button-blue mx-1 fw-bolder shadow">
          Buy ADAT Tokens
        </Button>

        <div className="mt-4 pb-5 desc-sm">
          *Marketing, developments and ADATshare tokens are locked
        </div>
      </div>
      <div className="adat-right" style={{ height: "90%", minHeight: "250px" }}>
        <Card className="shadow h-100 position-relative">
          <div style={{ height: "80%", minHeight: "200px" }}>
            <Chart data={data} />
          </div>
          <div style={{ height: "20%" }} className="position-relative">
            <div
              style={{ bottom: 0, right: 0 }}
              className="position-absolute w-100"
            >
              <ul
                className="pr-2 d-flex flex-wrap"
                style={{
                  listStyle: "none",
                  marginBottom: "0.1em",
                  padding: "0 0.5em",
                }}
              >
                {data.map((val, idx) => {
                  return (
                    <li
                      key={idx}
                      style={{ color: "#46297c", width: "50%" }}
                      className="d-flex align-items-center"
                    >
                      <div
                        style={{
                          width: "10px",
                          marginRight: "0.5em",
                          height: "10px",
                          backgroundColor: val.color,
                        }}
                      />
                      <span
                        className="small" /*style={{fontWeight: 'bold'}}*/
                      >{`${val.label}: ${val.value}%`}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
