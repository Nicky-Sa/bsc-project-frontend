"use client";

import React from "react";
import { devicesBattery } from "@/mock/devicesBattery";
import DarkContainer from "@/Components/Dashboard/DarkContainer";

import dynamic from "next/dynamic";

const MultiColumnChart = dynamic(() => import("@/Components/Charts/MultiColumnChart"), {
  loading: () => <p>درحال بارگذاری نمودار...</p>,
  ssr: false,
});

const BatteryUsage: React.FC = () => {
    return (
      <DarkContainer className={"basis-1/2 flex flex-col gap-4"} size={"free"}>
        <h6 className={"h6"}>نمودار مصرف باتری</h6>
        <MultiColumnChart data={devicesBattery} />
      </DarkContainer>
  );
};

export default BatteryUsage;
