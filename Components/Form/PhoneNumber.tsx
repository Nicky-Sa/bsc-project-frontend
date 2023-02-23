import React from "react";
import Input from "@/Components/Form/Input";
import { inputType } from "@/Components/Form/types";

type propsType = {
  disabled?: boolean;
};

const Email: React.FC<propsType & inputType> = ({
  name,
  title,
  placeholder,
  state,
  onChange,
  error,
  disabled = false,
}) => {
  return (
    <div className={"relative w-full"}>
      <Input
        title={title}
        type={"phone"}
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

export default Email;
