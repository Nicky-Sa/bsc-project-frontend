import React from "react";
import { classNames } from "@/utils/functions";
import { childrenType } from "@/global/types";

const Main: React.FC<childrenType> = ({ children }) => {
  return <main className={classNames("w-full flex flex-col gap-8 md:gap-16")}>{children}</main>;
};

export default Main;
