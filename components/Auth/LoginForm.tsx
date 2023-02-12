import React, { useEffect, useState } from "react";
import Email from "@/components/Form/Email";
import { canSubmit, changeInputs, checkEmail } from "@/components/Form/functions";
import Password from "@/components/Form/Password";
import Form from "@/components/Form/Form";
import AuthAPI from "@/services/api/AuthAPI";
import { authHandler } from "@/components/Auth/functions";

const LoginForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
  });
  useEffect(() => {
    setErrors({
      ...errors,
      username: checkEmail(inputs.username),
    });
  }, [inputs]);

  const onChange = changeInputs(setInputs, inputs);
  const onSubmit = authHandler(inputs, AuthAPI.login);

  return (
    <Form buttonName={"ورود"} buttonDisabled={canSubmit(inputs, errors)} onSubmit={onSubmit}>
      <Email
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
        onChange={onChange}
      />
    </Form>
  );
};

export default LoginForm;
