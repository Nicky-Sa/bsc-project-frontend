import React, { useState } from "react";
import { classNames } from "@/utils/functions";
import { Eye, EyeSlash } from "iconsax-react";
import Input from "@/components/Form/Input";
import { inputType } from "@/components/Form/types";

type propsType = {
  title: string;
  tip?: string;
};

const Password: React.FC<propsType & inputType> = ({ name, title, placeholder, state, onChange, error, tip }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={"relative"}>
      <p className="b1 text-neutral-1 mb-2 ">{title}</p>
      {!showPassword ? (
        <Eye
          size="32"
          className={classNames("text-neutral-2 absolute left-2 top-[50px] cursor-pointer animate-fadeIn")}
          onClick={() => {
            setShowPassword(true);
          }}
        />
      ) : (
        <EyeSlash
          size="32"
          className={classNames("text-neutral-2 absolute left-2 top-[50px] cursor-pointer animate-fadeIn")}
          onClick={() => {
            setShowPassword(false);
          }}
        />
      )}

      <Input
        type={showPassword ? "text" : "password"}
        name={name}
        error={error}
        placeholder={placeholder}
        state={state}
        onChange={onChange}
      />

      {tip && !error ? (
        <p className={"b2 mt-2 text-neutral-3 h-4"}>{tip}</p>
      ) : (
        <p className={"b2 mt-2 text-red-light-3 h-4"}>{error}</p>
      )}
    </div>
  );
};
export default Password;
