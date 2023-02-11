import React from "react";
import Input from "@/components/Form/Input";
import { inputType } from "@/components/Form/types";

type propsType = {
  disabled?: boolean;
};

const Text: React.FC<propsType & inputType> = ({
  name,
  title,
  placeholder,
  state,
  onChange,
  error,
  disabled = false,
}) => {
  return (
    <div className={"relative"}>

      <Input
        title={title}
        type={"text"}
        name={name}
        error={error}
        placeholder={placeholder}
        state={state}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Text;
