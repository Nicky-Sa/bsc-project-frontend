import React from "react";
import { PersianConstants } from "@/utils/persianTexts";

const CopyRight: React.FC = () => {
  return <p className={"text-neutral-4 text-center"}>{PersianConstants.copyRight}</p>;
};

export default CopyRight;
