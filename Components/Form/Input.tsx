import React, { useState } from "react";
import { classNames } from "@/utils/functions";
import { inputType } from "@/Components/Form/types";
import { Danger } from "iconsax-react";

type propsType = {
  type: "email" | "text" | "password";
  disabled?: boolean;
};

const Input: React.FC<propsType & inputType> = ({
  title,
  type,
  name,
  placeholder,
  state,
  onChange,
  error,
  disabled = false,
}) => {
  const [showError, setShowError] = useState(false);
  return (
    <>
      {error && showError && type !== "password" && (
        <Danger size="28" className={"absolute left-2 top-[48px] text-red-light-5 animate-fadeIn"} />
      )}

      <p className="b1 text-neutral-1 mb-1">{title}</p>

      <input
        onBlur={() => setShowError(true)}
        disabled={disabled}
        type={type}
        name={name}
        value={state}
        placeholder={placeholder}
        className={classNames(
          disabled ? "cursor-not-allowed" : "",
          "b1 bg-transparent text-neutral-2 w-full rounded-md b1 p-2 border-2 focus:ring-0 focus:outline-0",
          error && showError
            ? "border-red-light-5"
            : " border-primary-dark-4 hover:border-primary-light-3 focus:border-primary-light-3 transition-all duration-200"
        )}
        onChange={onChange}
      />
      {error && showError && <p className={"mt-1 text-red-light-5 h-4 b2 animate-fadeIn"}>{error}</p>}
    </>
  );
};

export default Input;
