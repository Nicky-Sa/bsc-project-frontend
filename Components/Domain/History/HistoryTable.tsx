"use client";
import React from "react";
import { ColumnsType } from "antd/es/table";
import { Popover } from "antd";
import { tagzLocationsType } from "@/Components/Domain/History/types";
import dynamic from "next/dynamic";
import Table from "@/Components/UI/Table";

const LocationPopover = dynamic(() => import("@/Components/Domain/History/LocationPopover"), {
  loading: () => <p>...</p>,
  ssr: false,
});

const columns: ColumnsType<tagzLocationsType> = [
  {
    title: "شماره تگ",
    dataIndex: "tagId",
    key: "tagId",
    render: (text) => <p>#{text}</p>,
  },
  {
    title: "مختصات",
    dataIndex: "coordinate",
    key: "coordinate",
    render: (coordinate) => (
      <p>
        [{coordinate.lon}, {coordinate.lat}]
      </p>
    ),
  },
  {
    title: "تاریخ و زمان",
    key: "dateTime",
    dataIndex: "dateTime",
  },
  {
    title: "موقعیت روی نقشه",
    dataIndex: "coordinate",
    key: "coordinate",
    render: (coordinate) => {
      return (
        <Popover content={<LocationPopover lon={coordinate.lon} lat={coordinate.lat} />}>
          <p className={"b1"}>مشاهده موقعیت</p>
        </Popover>
      );
    },
  },
];

type propsType = {
  data: tagzLocationsType[];
};

const HistoryTable: React.FC<propsType> = ({ data }) => {
  return <Table columns={columns} data={data} />;
};

export default HistoryTable;
