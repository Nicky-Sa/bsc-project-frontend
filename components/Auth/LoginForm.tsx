import React, { useEffect, useState } from "react";
import Button from "@/components/UI/Button";
import Text from "@/components/Form/Text";
import { changeInputs, checkEmail, checkPassword } from "@/utils/functions";
import Password from "@/components/Form/Password";

const LoginForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    setErrors({
      ...errors,
      username: checkEmail(inputs.username),
      password: checkPassword(inputs.password),
    });
  }, [inputs]);

  const onChange = changeInputs(setInputs, inputs);
  return (
    <form className={"flex flex-col gap-8"}>
      <Text
        name={"username"}
        state={inputs.username}
        placeholder={"ایمیل"}
        title={"ایمیل (نام کاربری)"}
        error={errors.username}
        onChange={onChange}
      />
      <Password
        name={"password"}
        state={inputs.password}
        placeholder={"رمز عبور"}
        title={"رمز عبور"}
        error={errors.password}
        onChange={onChange}
      />
      <Button variation={"fill"}>ورود</Button>
    </form>
  );
};

export default LoginForm;
