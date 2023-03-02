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



const TagzBalanceUsage: React.FC<multiColumnChartType> = ({data}) => {
    return (
      <DarkContainer className={"basis-1/2 flex flex-col gap-4 justify-between"} size={"free"}>
        <h6>نمودار هزینه تگ‌ها</h6>

        <MultiColumnChart
            data={data}
            fields={["month", "value", "tagId"]}
            color={["#6359E9", "#7E55D6", "#3D00A1", "#A588E2"]}
            unit={"تومان"}
            height={350}
          />
        </DarkContainer>
  );
};

export default TagzBalanceUsage;
