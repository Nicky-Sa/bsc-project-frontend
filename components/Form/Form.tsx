import React from "react";
import { childrenType } from "@/global/types";
import Button from "@/components/UI/Button";

type propsType = {
  buttonName: string;
  onSubmit?: () => void; //TODO: mandatory
};

const Form: React.FC<childrenType & propsType> = ({ children, buttonName, onSubmit }) => {
  return (
    <form className={"flex flex-col gap-5"}>
    {children}
      <Button variation={"fill"} className={"mt-4"} onClick={onSubmit}>{buttonName}</Button>

    </form>);
};

export default Form;
