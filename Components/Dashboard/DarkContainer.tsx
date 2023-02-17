import React from "react";
import { childrenType } from "@/global/types";
import { classNames } from "@/utils/functions";

const DarkContainer: React.FC<childrenType> = ({ children, className }) => {
  return <div className={classNames("p-2 rounded-2xl bg-primary-dark-5 ", className as string)}>{children}</div>;
};

export default DarkContainer;
