import { Danger } from "iconsax-react";
import React from "react";
import Input from "@/components/Form/Input";
import { inputType } from "@/components/Form/types";

type propsType = {
  title: string;
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
      <p className="b1 text-neutral-1 mb-2 ">{title}</p>
      {error && <Danger size="32" className={"absolute left-2 top-[52px] text-red-light-3 animate-fadeIn"} />}

      <Input
        type={"text"}
        name={name}
        error={error}
        placeholder={placeholder}
        state={state}
        onChange={onChange}
        disabled={disabled}
      />

      <p className={"mt-2 text-red-light-3 h-4 b2"}>{error}</p>
    </div>
  );
};

export default Text;
