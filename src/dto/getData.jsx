import { timeParse } from "d3-time-format";
import data from "./data.json";

function parseData(parse) {
  return function (d) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;

    return d;
  };
}

const parseDate = timeParse("%Y-%m-%d");

export default function getData() {
  // const promiseMSFT = fetch(
  //   "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv"
  // )
  //   .then((response) => response.text())
  //   .then((data) => tsvParse(data, parseData(parseDate)));
  const d = [];
  data.map((val) => {
    const parseD = parseData(parseDate);
    const dataIndiv = parseD(val);
    d.push(dataIndiv);
    // console.log(dataIndiv);
    return val;
  });
  console.log(d);
  return d;
}
