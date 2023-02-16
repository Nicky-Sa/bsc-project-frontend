import React, { useState } from "react";
import { classNames } from "@/utils/functions";
import { Eye, EyeSlash } from "iconsax-react";
import Input from "@/Components/Form/Input";
import { inputType } from "@/Components/Form/types";

const Password: React.FC<inputType> = ({ title, name, placeholder, state, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const eyesClassName = classNames(
    !state ? "text-transparent" : "text-neutral-2",
    "transition-all duration-500 absolute left-2 top-[48px] cursor-pointer animate-fadeIn"
  );

  return (
    <div className={"relative"}>
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
        title={title}
        type={showPassword ? "text" : "password"}
        name={name}
        error={error}
        placeholder={placeholder}
        state={state}
        onChange={onChange}
      />
    </div>
  );
};
export default Password;
