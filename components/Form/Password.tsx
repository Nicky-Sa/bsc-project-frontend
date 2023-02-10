import React, { useEffect, useState } from "react";
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
  const [showTip, setShowTip] = useState(tip && !error);
  useEffect(() => {
    setShowTip(tip && !error);
  }, [tip, error]);

  const eyesClassName = classNames(
    !state ? "text-transparent" : "text-neutral-2",
    "transition-all duration-500 absolute left-2 top-[52px] cursor-pointer animate-fadeIn"
  );

  return (
    <div className={"relative"}>
      <p className="b1 text-neutral-1 mb-2 ">{title}</p>
      {!showPassword ? (
        <Eye
          size="28"
          className={eyesClassName}
          onClick={() => {
            setShowPassword(true);
          }}
        />
      ) : (
        <EyeSlash
          size="28"
          className={eyesClassName}
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

      {
        <p className={classNames(showTip ? "text-neutral-5" : "text-red-light-5", "b2 mt-1 h-4")}>
          {showTip ? tip : error}
        </p>
      }
    </div>
  );
};
export default Password;
