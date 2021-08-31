import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function Chart({data = []}) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.PieChart3D);
    x.innerRadius = am4core.percent(40);
    // x.radius = am4core.percent(50)
    // x.legend = new am4charts.Legend();

    
    x.data = data;
    let series = x.series.push(new am4charts.PieSeries3D());
    series.dataFields.category = "label";
    series.dataFields.value = "value";
    // series.slices.template.tooltipText = "";
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    series.slices.template.propertyFields.fill = "color";


    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>;
}
