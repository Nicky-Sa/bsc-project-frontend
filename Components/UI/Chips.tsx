import React from "react";
import { childrenType } from "@/global/types";
import { classNames } from "@/utils/functions";

const Chips: React.FC<childrenType> = ({ children, className }) => {
  return <div className={classNames(className as string, "rounded-full items-center px-4")}>{children}</div>;
};

export default Chips;
