import React from "react";
import { childrenType } from "@/global/types";

const AuthLayout: React.FC<childrenType> = ({ children }) => {
  return <div className={"p-4"}>{children}</div>;
};

export default AuthLayout;
