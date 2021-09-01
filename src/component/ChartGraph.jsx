import React, { Component } from "react";
import Chart from "kaktana-react-lightweight-charts";
import dataJSON from "../dto/data.json";

export default class ChartGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        alignLabels: true,
        timeScale: {
          rightOffset: 0,
          barSpacing: 2,
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
          rightBarStaysOnScroll: true,
          borderVisible: true,
          borderColor: "#e5ddf3",
          visible: true,
          timeVisible: true,
          secondsVisible: true,
        },
        localization: {
          priceFormatter: (price) => "$" + price,
        },
        priceScale: {
          position: "right",
          // mode: 2,
          autoScale: true,
          invertScale: false,
          alignLabels: false,
          borderVisible: true,
          borderColor: "#e5ddf3",
          scaleMargins: {
            top: 0.3,
            bottom: 0.25,
          },
        },
      },
      candlestickSeries: [
        {
          data: [
            {
              time: "2018-10-19",
              open: 180.34,
              high: 180.99,
              low: 178.57,
              close: 179.85,
            },
            {
              time: "2018-10-22",
              open: 180.82,
              high: 181.4,
              low: 177.56,
              close: 178.75,
            },
            {
              time: "2018-10-23",
              open: 175.77,
              high: 179.49,
              low: 175.44,
              close: 178.53,
            },
            {
              time: "2018-10-24",
              open: 178.58,
              high: 182.37,
              low: 176.31,
              close: 176.97,
            },
            {
              time: "2018-10-25",
              open: 177.52,
              high: 180.5,
              low: 176.83,
              close: 179.07,
            },
            {
              time: "2018-10-26",
              open: 176.88,
              high: 177.34,
              low: 170.91,
              close: 172.23,
            },
            {
              time: "2018-10-29",
              open: 173.74,
              high: 175.99,
              low: 170.95,
              close: 173.2,
            },
            {
              time: "2018-10-30",
              open: 173.16,
              high: 176.43,
              low: 172.64,
              close: 176.24,
            },
            {
              time: "2018-10-31",
              open: 177.98,
              high: 178.85,
              low: 175.59,
              close: 175.88,
            },
            {
              time: "2018-11-01",
              open: 176.84,
              high: 180.86,
              low: 175.9,
              close: 180.46,
            },
            {
              time: "2018-11-02",
              open: 182.47,
              high: 183.01,
              low: 177.39,
              close: 179.93,
            },
            {
              time: "2018-11-05",
              open: 181.02,
              high: 182.41,
              low: 179.3,
              close: 182.19,
            },
          ],
        },
      ],
      data: [],
    };
  }

  componentDidMount() {
    if (!this.state.data.length) {
      console.log("component did update");
      const dataNew = [{ data: [] }];
      this.props.data.forEach((val) => {
        const newVal = {
          time: val.date,
          // open: parseFloat(val.open),
          // high: parseFloat(val.high),
          // low: parseFloat(val.low),
          // close: parseFloat(val.close),
          open: +val.open,
          high: +val.high,
          low: +val.low,
          close: +val.close,
        };
        dataNew[0].data.push(newVal);
        this.setState({
          ...this.state,
          candlestickSeries: dataNew,
        });
      });
    }
  }

  render() {
    const data = this.state.candlestickSeries;
    console.log(data);
    return (
      <Chart
        legend={this.props.title}
        darkTheme={this.props.darkTheme}
        options={{
          ...this.state.options,
          localization: this.props.currency ? {
            priceFormatter: (price) => this.props.currency + price,
          } : {
            priceFormatter: (price) => "$" + price,
          },
        }}
        candlestickSeries={data}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}
