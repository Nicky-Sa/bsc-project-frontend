import React from "react";
import { childrenType } from "@/global/types";
import Button from "@/Components/UI/Button";
import { classNames } from "@/utils/functions";

type propsType = {
  buttonText: string;
  onSubmit: () => void;
  buttonDisabled: boolean;
  buttonShape?: "fit" | "full";
  buttonDataTestId?: string;
};

const Form: React.FC<childrenType & propsType> = ({
  children,
  className,
  buttonText,
  onSubmit,
  buttonDisabled = true,
  buttonShape = "full",
  buttonDataTestId = "",
}) => {
  return (
    <div className={classNames(className as string, "flex flex-col gap-5", buttonShape === "fit" ? "items-end" : "")}>
      {children}
      <Button
        dataTestId={buttonDataTestId}
        disabled={buttonDisabled}
        variation={"fill"}
        className={classNames(buttonShape === "fit" ? "max-w-[30%]" : "mt-4")}
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Form;
