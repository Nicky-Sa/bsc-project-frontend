"use client";
import React from "react";
import { Table as AntTable, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CheckCircleOutlined, CloseCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { transactionsType } from "@/Components/Domain/Finance/types";
import { reformat } from "@/utils/functions";

const columns: ColumnsType<transactionsType> = [
  {
    title: "دلیل",
    dataIndex: "reason",
    key: "reason",
  },
  {
    title: "مبلغ",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => <p className={"b1"}>{reformat(amount, "تومان")}</p>,
  },
  {
    title: "وضعیت",
    dataIndex: "status",
    key: "status",
    render: (text) => {
      switch (text) {
        case "موفق":
          return (
            <Tag icon={<CheckCircleOutlined />} color="success">
              {text}
            </Tag>
          );
        case "ناموفق":
          return (
            <Tag icon={<CloseCircleOutlined />} color="error">
              {text}
            </Tag>
          );
        case "درحال بررسی":
          return (
            <Tag icon={<SyncOutlined spin />} color="processing">
              {text}
            </Tag>
          );
      }
    },
  },
  {
    title: "تاریخ و زمان",
    key: "timestamp",
    dataIndex: "timestamp",
  },
];

type propsType = {
  data: transactionsType[];
};

const TransactionsTable: React.FC<propsType> = ({ data }) => {
  return <AntTable columns={columns} dataSource={data} pagination={false} scroll={{ x: "max-content" }} />;
};

export default TransactionsTable;
