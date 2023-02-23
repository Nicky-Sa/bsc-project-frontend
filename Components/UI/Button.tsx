import React from "react";
import { childrenType } from "@/global/types";
import { classNames } from "@/utils/functions";

type propsType = {
  variation: "outline" | "fill" | "text";
  disabled?: boolean;
  onClick?: () => void; //TODO: mandatory
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
      className = "w-full p-2 bg-gradient-to-r from-primary-dark-3 to-primary-dark-1 hover:opacity-80";
      break;
    case "outline":
      className = "w-full p-2 border-2 border-primary-light-3 hover:border-primary-dark-2";
      break;
    case "text":
      className = "p-1 hover:bg-primary-dark-8 w-fit";
      break;
  }
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          disabled ? "grayscale cursor-not-allowed" : "transition duration-500",
          "rounded-md text-neutral-1",
          className,
          extraClass as string,
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
