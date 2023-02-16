import React from "react";
import { childrenType } from "@/global/types";

const Container: React.FC<childrenType> = ({ children }) => {
  return <div className={"p-2 rounded-2xl bg-primary-dark-5 "}>{children}</div>;
};

export default Container;
