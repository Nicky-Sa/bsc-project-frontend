import React from "react";
import { childrenType } from "@/global/types";
import Button from "@/Components/UI/Button";

type propsType = {
  buttonName: string;
  onSubmit: () => void;
  buttonDisabled: boolean;
};

const Form: React.FC<childrenType & propsType> = ({ children, buttonName, onSubmit, buttonDisabled = true }) => {
  return (
    <div className={"flex flex-col gap-5"}>
      {children}
      <Button disabled={buttonDisabled} variation={"fill"} className={"mt-4"} onClick={onSubmit}>
        {buttonName}
      </Button>
    </div>
  );
};

export default Form;
