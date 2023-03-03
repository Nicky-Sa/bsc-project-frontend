import React from "react";
import { Empty } from "antd";

const EmptyState: React.FC = () => {
  return (
    <div className={"lg:absolute right-[34%] top-[36%]"}>
      <Empty description="داده‌ای وجود ندارد." />
    </div>
  );
};

export default EmptyState;
