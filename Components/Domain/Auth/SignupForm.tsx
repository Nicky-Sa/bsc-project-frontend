"use client";
import React, { useEffect, useState } from "react";
import Email from "@/Components/Form/Email";
import { canSubmit, changeInputs, checkEmail, checkPassword, checkPasswordMatch } from "@/Components/Form/functions";
import Password from "@/Components/Form/Password";
import Form from "@/Components/Form/Form";
import AuthAPI from "@/services/api/AuthAPI";
import { authHandler } from "@/Components/Domain/Auth/functions";
import { useRouter } from "next/navigation";

const SignUpForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    setErrors({
      ...errors,
      username: checkEmail(inputs.username),
      password: checkPassword(inputs.password),
      confirmPassword: checkPasswordMatch(inputs.password, inputs.confirmPassword),
    });
  }, [inputs]);

  const router = useRouter();
  const onChange = changeInputs(setInputs, inputs);
  const onSubmit = authHandler(inputs, AuthAPI.signup, router);

  return (
    <Form buttonName={"ثبت‌نام"} buttonDisabled={canSubmit(inputs, errors)} onSubmit={onSubmit}>
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
        error={errors.password}
        onChange={onChange}
      />
      <Password
        name={"confirmPassword"}
        state={inputs.confirmPassword}
        placeholder={"تکرار رمز عبور"}
        title={"تکرار رمز عبور"}
        error={errors.confirmPassword}
        onChange={onChange}
      />
    </Form>
  );
};

export default SignUpForm;
