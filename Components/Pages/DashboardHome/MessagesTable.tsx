"use client";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "@/Components/antStyles.css";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import Button from "@/Components/UI/Button";
import IconText from "@/Components/UI/IconText";
import { ArrowLeft2 } from "iconsax-react";

type propsType = {};

type DataType = {
  key: string;
  type: string;
  id: number;
  tagNumber: string;
  timestamp: string;
};

const columns: ColumnsType<DataType> = [
  {
    title: "آیدی",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "نوع",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "شماره تگ",
    dataIndex: "tagNumber",
    key: "tagNumber",
    render: (text) => <p>#{text}</p>,
  },
  {
    title: "تاریخ و زمان",
    key: "timestamp",
    dataIndex: "timestamp",
  },
];

const data: DataType[] = [
  {
    id: 1,
    key: "1",
    type: "هشدار",
    tagNumber: "4",
    timestamp: "1401/11/01 - 19:21",
  },
  {
    id: 4,
    key: "2",
    type: "شارژ مجدد",
    tagNumber: "1",
    timestamp: "1401/07/19 - 14:38",
  },
];

const MessagesTable: React.FC<propsType> = ({}) => {
  return (
    <DarkContainer className={"basis-1/2 flex flex-col gap-4"} size={"free"}>
      <div className={"flex flex-row items-center justify-between"}>
        <h6 className={"h6"}>پیام‌های دریافتی از تگ‌ها</h6>
        <Button variation={"text"}>
          <IconText className={"items-center"}>
            <p className={"b1"}>نمایش همه</p>
            <ArrowLeft2 size="24" className={"mb-[3px]"}/>
          </IconText>
        </Button>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: "max-content" }} />
    </DarkContainer>
  );
};

export default MessagesTable;
