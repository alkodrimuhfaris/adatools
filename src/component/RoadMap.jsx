import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function RoadMap() {
  return (
    <Row>
      <Col xs={10} md={3} className="pe-2 mt-5 mx-auto">
        <Card className="card-bg-purple h-100">
          <div className="text-center bg-purple text-white top py-2 fw-bolder">
            2021 Q1
          </div>
          <Card.Body>
            <ul>
              <li>Technical improvements</li>
              <li>Websockets</li>
              <li>SushiSwap integration</li>
              <li>Multiexchange support</li>
              <li>Velox bots and limit orders integration</li>
              <li>UX/UI redesign</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={10} md={3} className="px-2 mt-5 mx-auto">
        <Card className="card-bg-purple h-100">
          <div className="text-center bg-purple text-white top py-2 fw-bolder">
            2021 Q2
          </div>
          <Card.Body>
            <ul>
              <li>NFT marketing promotion tool</li>
              <li>Presale promotion tools</li>
              <li>Binance smart chain integration (Pencakeswap)</li>
              <li>UI/UX redesign</li>
              <li>Pencake listing</li>
              <li>Improvements based on community feedback</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={10} md={3} className="px-2 mt-5 mx-auto">
        <Card className="card-bg-purple h-100">
          <div className="text-center bg-purple text-white top py-2 fw-bolder">
            2021 Q3
          </div>
          <Card.Body>
            <ul>
              <li>CEX tools</li>
              <li>PAdvanced public API releases</li>
              <li>More ADA integration</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={10} md={3} className="pe-2 mt-5 mx-auto">
        <Card className="card-bg-purple h-100">
          <div className="text-center bg-purple text-white top py-2 fw-bolder">
            2021 Q4
          </div>
          <Card.Body>
            <ul>
              <li>More ADA integration</li>
              <li>Improvements based on community feedback</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
