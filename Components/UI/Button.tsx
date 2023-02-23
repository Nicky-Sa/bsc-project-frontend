import React from "react";
import { childrenType } from "@/global/types";
import { classNames } from "@/utils/functions";

type propsType = {
  variation: "outline" | "fill" | "text" | "success";
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<propsType & childrenType> = ({
  children,
  variation,
  disabled = false,
  className: extraClass,
  onClick,
}) => {
  let className = "";
  switch (variation) {
    case "fill":
      className = "text-neutral-1 w-full bg-gradient-to-r from-primary-dark-3 to-primary-dark-1 hover:opacity-80";
      break;
    case "outline":
      className =
        "text-neutral-1 w-full text-primary-light-3 border-2 border-primary-light-3 hover:border-primary-dark-2 hover:text-primary-dark-2";
      break;
    case "text":
      className = "p-2 w-fit";
      break;
    case "success":
      className = "text-neutral-1 w-full bg-gradient-to-r from-green-dark-3 to-green-dark-1";
      break;
  }
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          disabled ? "grayscale cursor-not-allowed hover:opacity-100" : "transition duration-500",
          "rounded-md p-2 ",
          className,
          extraClass as string
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
