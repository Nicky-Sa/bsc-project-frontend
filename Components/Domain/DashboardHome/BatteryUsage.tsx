"use client";

import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";

import dynamic from "next/dynamic";
import { Skeleton } from "antd";

const MultiColumnChart = dynamic(() => import("@/Components/Charts/MultiColumnChart"), {
  loading: () => <Skeleton active />,
  ssr: false,
});

type propsType = {
  data: {
    month: string;
    tagNumber: string;
    value: number;
  }[];
};

const BatteryUsage: React.FC<propsType> = ({ data }) => {
  return (
    <DarkContainer className={"basis-1/2 flex flex-col gap-4"} size={"free"}>
      <h6 className={"h6"}>نمودار مصرف باتری</h6>
      <MultiColumnChart
        data={data}
        fields={["month", "value", "tagNumber"]}
        colors={["#6359E9", "#64CFF6", "#7E55D6", "#B199E6"]}
      />
    </DarkContainer>
  );
};

export default BatteryUsage;
