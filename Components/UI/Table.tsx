import React from "react";
import { PaginationProps, Table as AntTable } from "antd";
import { ColumnsType } from "antd/es/table";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

type propsType<T> = {
  columns: ColumnsType<T>;
  data: T[];
};

const paginationItemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
  if (type === "prev") {
    return <ArrowLeft2 size="20" color="#FFF" />;
  }
  if (type === "next") {
    return <ArrowRight2 size="20" color="#FFF" />;
  }
  return originalElement;
};

const Table = <T extends object>({ columns, data }: propsType<T>) => {
  return (
    <AntTable
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5, position: ["bottomRight"], itemRender: paginationItemRender }}
      scroll={{ x: "max-content" }}
      rowKey={"id"}
    />
  );
};

export default Table;
