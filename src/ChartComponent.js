
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column3D, FusionTheme);

const ChartComponent = ({chart}) => {
console.log(chart)
  const chartConfigs = {
    type: "bar3d", 
    width: "1000", 
    height: "800", 
    dataFormat: "json",
 
    dataSource: {
 
      chart: {
        caption: "Languages used",
        subCaption: "total no of repos",
        xAxisName: "Tasks",
        yAxisName: "Number of days",
        numberSuffix: "",
        theme: "fusion",
        yAxisMaxValue: "50",
      },
      
      data: chart
    }
    
  };
  

  return <ReactFC {...chartConfigs} />
}
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component



export default ChartComponent;