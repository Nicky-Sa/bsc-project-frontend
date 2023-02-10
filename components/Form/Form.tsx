import React from "react";
import { childrenType } from "@/global/types";

const Form: React.FC<childrenType> = ({ children }) => {
  return <form className={"flex flex-col gap-8"}>{children}</form>;
};

export default Form;
