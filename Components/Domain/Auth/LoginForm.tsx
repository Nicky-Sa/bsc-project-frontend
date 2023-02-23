"use client";
import React, { useEffect, useState } from "react";
import Email from "@/Components/Form/Email";
import { canSubmit, changeInputs, checkEmail } from "@/Components/Form/functions";
import Password from "@/Components/Form/Password";
import Form from "@/Components/Form/Form";
import AuthAPI from "@/services/api/AuthAPI";
import { authHandler } from "@/Components/Domain/Auth/functions";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
  });

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      username: checkEmail(inputs.username),
    }));
  }, [inputs]);

  const router = useRouter();
  const onChange = changeInputs(setInputs, inputs);
  const onSubmit = authHandler(inputs, AuthAPI.login, router);

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
