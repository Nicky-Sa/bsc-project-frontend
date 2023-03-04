"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "antd";
import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { reformat } from "@/utils/functions";

const PieChart = dynamic(() => import("@/Components/Charts/PieChart"), {
  loading: () => <Skeleton active />,
  ssr: false,
});

type propsType = {
  used: number;
  left: number;
}

const TotalBalanceUsage: React.FC<propsType> = ({ used, left }) => {

  const data = [
    {
      title: "استفاده شده",
      value: used
    },
    {
      title: "مانده حساب",
      value: left
    },
  ]
  return (
    <DarkContainer className={"basis-1/2 flex flex-col"} size={"free"}>
      <h6>نمودار هزینه کل</h6>
      <PieChart data={data} fields={["value", "title"]} color={["#7E55D6", "#669744"]} unit={"تومان"} />
      <p className={"b1"}>مانده حساب: {reformat(data?.[1].value, "تومان")}</p>
    </DarkContainer>
  );
};

export default TotalBalanceUsage;
