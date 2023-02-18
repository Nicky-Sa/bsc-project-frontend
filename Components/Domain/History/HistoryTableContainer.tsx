"use client";
import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import HistoryTable from "@/Components/Domain/History/HistoryTable";
import { historyType } from "@/Components/Domain/History/types";

type propsType = {
  data: historyType[];
};

const HistoryTableContainer: React.FC<propsType> = ({data}) => {
  return (
    <DarkContainer className={"w-full flex flex-col gap-4"} size={"free"}>
      <h6 className={"h6"}>موقعیت‌های قبلی</h6>
      <HistoryTable data={data}/>
    </DarkContainer>
  );
};

export default HistoryTableContainer;
