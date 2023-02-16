import React from "react";
import { childrenType } from "@/global/types";

//TODO: instead of main, add dashboard layout and main here.

const DashboardLayout: React.FC<childrenType> = ({ children }) => {

  return (
    <div className={"p-4"}>
      {children}
    </div>
  );
};

export default DashboardLayout;
