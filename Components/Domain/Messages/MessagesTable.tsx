"use client";
import React from "react";
import { Popover, Table as AntTable } from "antd";
import type { ColumnsType } from "antd/es/table";
import "@/global/antStyles.css";
import { messagesType } from "@/Components/Domain/Messages/types";

const columns: ColumnsType<messagesType> = [
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
  {
    title: "پیام",
    key: "message",
    dataIndex: "message",
    render: (text) => {
      return (
        <Popover content={text} title="پیام:">
          <p className={"b1"}>مشاهده پیام</p>
        </Popover>
      );
    },
  },
];

type propsType = {
  data: messagesType[]
};


const MessagesTable: React.FC<propsType> = ({data}) => {
  return (
      <AntTable columns={columns} dataSource={data} pagination={false} scroll={{ x: "max-content" }} />
  );
};

export default MessagesTable;
