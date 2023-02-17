import React from "react";
import { Column } from "@ant-design/plots";
import "@/Components/antStyles.css";
import { ListItem } from "@antv/component";
import { Datum } from "@antv/g2plot";
import { Marker } from "@antv/g2/lib/interface";

type propsType<T> = {
  data: T[];
  fields: [string, string, string];
};

const textStyle = {
  fill: "white",
  opacity: 0.7,
  fontSize: 14,
  fontFamily: "peyda",
};

const MultiColumnChart = <T extends object>({ data, fields }: propsType<T>) => {
  const config = {
    data,
    scrollbar: {
      type: "horizontal" as "horizontal",
      padding: [30, 0, 0, 0] as [number, number, number, number],
      style: {
        thumbHighlightColor: "#5835ac",
        thumbColor: "#6c3fd2",
        trackColor: "3F2A6B",
      },
      categorySize: 100,
    },
    autoFit: true,
    xField: fields[0],
    yField: fields[1],
    seriesField: fields[2],
    isGroup: true,
    columnWidthRatio: 0.35,
    marginRatio: 0.4,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
    colorField: "tagNumber", // or seriesField in some cases
    color: ["#6359E9", "#64CFF6", "#7E55D6", "#B199E6"],
    xAxis: {
      label: {
        offset: 20,
        autoRotate: false,
        style: textStyle,
      },
    },
    yAxis: {
      label: {
        autoRotate: false,
        style: textStyle,
        formatter: (text: string, item: ListItem, index: number) => {
          return `${text}%`;
        },
      },
      grid: {
        line: {
          style: {
            stroke: "#808080",
            lineWidth: 1,
            lineDash: [2, 4],
            strokeOpacity: 0.7,
            cursor: "pointer",
          },
        },
      },
    },
    legend: {
      layout: "vertical" as "vertical",
      position: "right" as "right",
      offsetX: 12,
      itemName: {
        style: textStyle,
        formatter: (text: string, item: ListItem, index: number) => {
          return `#${text}`;
        },
      },
      marker: {
        symbol: "circle" as Marker,
        spacing: 28,
      },
      pageNavigator: {
        marker: {
          style: {
            fill: "#BEAAEA",
            inactiveFill: "#7E55D6",
          },
        },
        text: {
          style: {
            fill: "transparent",
          },
        },
      },
    },
    tooltip: {
      formatter: (datum: Datum) => {
        return { name: `#${datum.tagNumber}`, value: `${datum.value}%` };
      },
    },
  };

  return <Column {...config} />;
};

export default MultiColumnChart;
