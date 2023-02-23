import React from "react";
import { childrenType } from "@/global/types";
import Button from "@/Components/UI/Button";
import { classNames } from "@/utils/functions";

type propsType = {
  buttonName: string;
  onSubmit: () => void;
  buttonDisabled: boolean;
  buttonShape?: "fit" | "full";
};

const Form: React.FC<childrenType & propsType> = ({
  children,
  className,
  buttonName,
  onSubmit,
  buttonDisabled = true,
  buttonShape = "full",
}) => {
  return (
    <div
      className={classNames(className as string, "flex flex-col gap-5", buttonShape === "fit" ? "items-end" : "")}
    >
      {children}
      <Button
        disabled={buttonDisabled}
        variation={"fill"}
        className={classNames(buttonShape === "fit" ? "max-w-[30%]" : "mt-4")}
        onClick={onSubmit}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default Form;
