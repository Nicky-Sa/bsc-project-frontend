import React, { useEffect, useState } from "react";
import Text from "@/components/Form/Text";
import { changeInputs, checkEmail, checkPassword } from "@/utils/functions";
import Password from "@/components/Form/Password";
import Form from "@/components/Form/Form";

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
    <Form buttonName={"ورود"}>
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
    </Form>
  );
};

export default LoginForm;
