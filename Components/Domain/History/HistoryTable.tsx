"use client";
import React from "react";
import { ColumnsType } from "antd/es/table";
import { Popover, Table as AntTable } from "antd";
import { historyType } from "@/Components/Domain/History/types";
import dynamic from "next/dynamic";

const LocationPopover = dynamic(() => import("@/Components/Domain/History/LocationPopover"), {
  loading: () => <p>...</p>,
  ssr: false,
});

const columns: ColumnsType<historyType> = [
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
    key: "timestamp",
    dataIndex: "timestamp",
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
  data: historyType[];
};

const HistoryTable: React.FC<propsType> = ({ data }) => {
  return <AntTable columns={columns} dataSource={data} pagination={false} scroll={{ x: "max-content" }} />;
};

export default HistoryTable;
