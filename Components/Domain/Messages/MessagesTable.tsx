"use client";
import React from "react";
import { Popover } from "antd";
import type { ColumnsType } from "antd/es/table";
import { messagesType } from "@/Components/Domain/Messages/types";
import Table from "@/Components/UI/Table";

const columns: ColumnsType<messagesType> = [
  {
    title: "شماره تگ",
    dataIndex: "tagId",
    key: "tagId",
    render: (text) => <p>#{text}</p>,
  },
  {
    title: "نوع",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "تاریخ و زمان",
    key: "dateTime",
    dataIndex: "dateTime",
  },
  {
    title: "پیام",
    key: "text",
    dataIndex: "text",
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
  return <Table columns={columns} data={data} />;
};

export default MessagesTable;
