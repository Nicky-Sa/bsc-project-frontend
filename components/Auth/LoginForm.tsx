import React, { useState } from "react";
import Button from "@/components/UI/Button";
import Text from "@/components/Form/Text";
import { changeInputs } from "@/utils/functions";
import Password from "@/components/Form/Password";

const LoginForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    uniqueId: "",
    password: "",
    passwordRepeat: "",
    otp: false,
  });

  const onChange = changeInputs(setInputs, inputs);
  return (
    <div>
      <Text
        name={"username"}
        state={inputs.username}
        placeholder={"ایمیل"}
        title={"ایمیل (نام کاربری)"}
        error={""}
        onChange={onChange}
      />
      <Password
        name={"password"}
        state={inputs.password}
        placeholder={"رمز عبور"}
        title={"رمز عبور"}
        error={""}
        onChange={onChange}
      />
      <Button variation={"fill"}>ورود</Button>
    </div>
  );
};

export default LoginForm;
