import React from "react";
import { Table as AntTable } from "antd";
import { ColumnsType } from "antd/es/table";

type propsType<T> = {
  columns: ColumnsType<T>;
  data: T[];
};
const Table = <T extends object>({columns, data}: propsType<T>) => {
  return <AntTable columns={columns} dataSource={data} pagination={false} scroll={{ x: "max-content" }} rowKey={"id"} />;

};

export default Table;
