"use client";
import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import dynamic from "next/dynamic";
import { Skeleton } from "antd";
import { multiColumnChartType } from "@/Components/Charts/types";

const MultiColumnChart = dynamic(() => import("@/Components/Charts/MultiColumnChart"), {
  loading: () => <Skeleton active />,
  ssr: false,
});

const BatteryUsage: React.FC<multiColumnChartType> = ({ data }) => {
  return (
    <DarkContainer className={"basis-1/2 flex flex-col gap-4"} size={"free"}>
      <h6>نمودار مصرف باتری</h6>
      <MultiColumnChart
        data={data}
        fields={["date", "value", "tagNumber"]}
        color={["#6359E9", "#64CFF6", "#7E55D6", "#B199E6"]}
        unit={"%"}
      />
    </DarkContainer>
  );
};

export default BatteryUsage;
