"use client";
import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import HistoryTable from "@/Components/History/HistoryTable";
import { tagzLocationsType } from "@/Components/History/types";

type propsType = {
  data: tagzLocationsType[];
};

const HistoryTableContainer: React.FC<propsType> = ({data}) => {
  return (
    <DarkContainer className={"w-full flex flex-col gap-4"} size={"free"}>
      <h6>همه‌ی موقعیت‌ها</h6>
      <HistoryTable data={data}/>
    </DarkContainer>
  );
};

export default HistoryTableContainer;
