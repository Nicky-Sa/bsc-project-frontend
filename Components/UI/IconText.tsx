import React from "react";
import { classNames } from "@/utils/functions";
import { childrenType } from "@/global/types";

type propsType = {
  size?: string;
};

const IconText: React.FC<propsType & childrenType> = ({ children, className, size = "b1" }) => {
  return (
    <div className={classNames("flex flex-row gap-2 py-1 px-2", className as string, size)}>{children}</div>
  );
};

export default IconText;
