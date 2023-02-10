import React from "react";
import { classNames } from "@/utils/functions";
import { inputType } from "@/components/Form/types";

type propsType = {
  type: "text" | "password";
  disabled?: boolean;
};

const Input: React.FC<propsType & inputType> = ({
  type,
  name,
  placeholder,
  state,
  onChange,
  error,
  disabled = false,
}) => {
  return (
    <input
      disabled={disabled}
      type={type}
      name={name}
      value={state}
      placeholder={placeholder}
      className={classNames(
        disabled ? "cursor-not-allowed" : "",
        "b1 bg-transparent text-neutral-2 focus:bg-transparent active:bg-transparent w-full rounded-md b1 p-2 border-2 focus:ring-0 focus:outline-0",
        error
          ? "border-red-light-3"
          : "border-primary-light-3 focus:border-primary-dark-6 hover:border-primary-dark-4 transition-all duration-200"
      )}
      onChange={onChange}
    />
  );
};

export default Input;
