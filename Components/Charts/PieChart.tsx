import React from "react";
import { Pie } from "@ant-design/plots";
import { Marker } from "@antv/g2/lib/interface";
import { ListItem } from "@antv/component";
import { Datum } from "@antv/g2plot";
import { reformat } from "@/utils/functions";
import { chartPropsType } from "@/Components/Charts/types";
import { textStyle } from "@/Components/Charts/consts";

const PieChart = <T extends object>({ data, fields, color, unit }: chartPropsType<T>) => {
  const config = {
    data,
    pieStyle: {
      lineWidth: 0,
    },
    height: 350,
    angleField: fields[0],
    colorField: fields[1],
    color: color,
    radius: 0.75,
    label: {
      type: "inner",
      offset: "-30%",
      formatter: (datum: Datum) => {
        return `${datum.title}\n${(datum.percent * 100).toFixed(0)}%`;
      },
      style: {
        ...textStyle,
        opacity: 1,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    legend: {
      layout: "vertical" as "vertical",
      position: "right" as "right",
      itemName: {
        style: textStyle,
        formatter: (text: string, item: ListItem, index: number) => {
          return `${text}`;
        },
      },
      marker: {
        symbol: "circle" as Marker,
        spacing: -15,
      },
    },
    tooltip: {
      formatter: (datum: Datum) => {
        return { name: `${datum.title}`, value: `${reformat(datum.value, unit)}` };
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChart;
