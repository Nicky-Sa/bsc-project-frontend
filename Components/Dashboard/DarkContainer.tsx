import React from "react";
import { childrenType } from "@/global/types";
import { classNames } from "@/utils/functions";

type propsType = {
  size: "fit" | "free";
};

const DarkContainer: React.FC<childrenType & propsType> = ({ children, className, size }) => {
  return (
    <div
      className={classNames(
        className as string,
        "w-full rounded-2xl bg-primary-dark-5 relative",
        size === "fit" ? "p-2 " : "py-4 px-6"
      )}
    >
      {children}
    </div>
  );
};

export default DarkContainer;
