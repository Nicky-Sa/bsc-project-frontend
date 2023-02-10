import React from "react";
import { childrenType } from "@/global/types";
import { classNames } from "@/utils/functions";

type propsType = {
  variation: "outline" | "fill" | "text";
  disabled?: boolean;
};

const Button: React.FC<propsType & childrenType> = ({ children, variation, disabled = false }) => {
  let className = ""
  switch (variation) {
    case "fill":
      className = "bg-gradient-to-r from-primary-dark-3 to-primary-dark-1 hover:opacity-80; ";
      break
    case "outline":
      className = "border-2 border-primary-light-3 hover:border-primary-dark-;2";
  }
  return (
    <>
      <button
        disabled={disabled}
        className={classNames(
          disabled ? "grayscale cursor-not-allowed" : "transition duration-500",
          "py-2 w-full rounded-md text-neutral-1",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
