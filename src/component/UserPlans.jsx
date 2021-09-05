import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import SvgIconCustom from "./SvgIconCustom";

export default function UserPlans() {
  return (
    <Row>
      <Col xs={10} md={4} className="pe-2 my-3 border-0 mx-auto">
        <Card className="card-radius">
          <Card.Body className="card-wrapper">
            <h4 className="text-purple">FREE</h4>
            <hr className="text-purple" />
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Real time data and chart</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Pool explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Pair explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super"> Big swap explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Multiswap windows</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">10 favourite pairs</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Desktop price alerts</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Stable coin pairs</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Token / token pairs</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={10} md={4} className="px-2 my-3 mx-auto">
        <Card className="card-radius">
          <Card.Body className="card-wrapper">
            <h4 className="text-purple">Standard</h4>
            <p>$100 paid in ADAT/Monthly subscription -or- 1,000 ADAT/Hold*</p>
            <hr className="text-purple" />
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Real time data and chart</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Pool explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Pair explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super"> Big swap explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Multiswap windows</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">No limit favourite pairs</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">My positions (P&L tracker)</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Trade analytics</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Wallet info and tracker</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">
                Desktop/Mail/Telegram price alerts
              </span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">No advertisements</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Stable coin pairs</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Token/token pairs</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Limit order & trading bot</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={10} md={4} className="pe-2 mt-3 mx-auto">
        <Card className="card-radius premium">
          <Card.Body className="card-wrapper">
            <h4 className="text-purple">Premium</h4>
            <p>1,000 ADAT/Hold*</p>
            <hr className="text-purple" />
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Real time data and chart</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Pool explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Pair explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super"> Big swap explorer</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Multiswap windows</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">No limit favourite pairs</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">My positions (P&L tracker)</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Trade analytics</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Wallet info and tracker</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">
                Desktop/Mail/Telegram price alerts
              </span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">No advertisements</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Stable coin pairs</span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Token/token pairs</span>
            </div>
            <div className="d-flex align-items-center mt-1 mb-1">
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super text-purple fw-bolder">
                <a href="#" className="d-flex purple-text align-items-center ver-1 font-bold text-decoration-none">
                  ADATshare{" "}
                  <span style={{ marginLeft: "0.5em" }}>
                    <SvgIconCustom
                      src={"/assets/icons/34.svg"}
                      className={["premium-open"]}
                    />
                  </span>
                </a>
              </span>
            </div>
            <div className="d-flex align-items-center mt-1 mb-1">
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super text-purple fw-bolder">
                <a href="#" className="d-flex purple-text align-items-center ver-1 font-bold text-decoration-none">
                  ADATforce & ADATforce Ventures{" "}
                  <span style={{ marginLeft: "0.5em" }}>
                    <SvgIconCustom
                      src={"/assets/icons/34.svg"}
                      className={["premium-open"]}
                    />
                  </span>
                </a>
              </span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">
                More exclusive upcoming features
              </span>
            </div>
            <div>
              <span className="material-icons check-purple"> done</span>
              <span className="vertical-super">Limit order & trading bot</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
