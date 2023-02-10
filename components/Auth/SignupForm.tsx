import React, { useEffect, useState } from "react";
import Button from "@/components/UI/Button";
import Text from "@/components/Form/Text";
import { changeInputs, checkEmail, checkPassword, checkPasswordMatch } from "@/utils/functions";
import Password from "@/components/Form/Password";
import Form from "@/components/Form/Form";
import { tip } from "@/utils/texts";

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

  const onChange = changeInputs(setInputs, inputs);
  return (
    <Form>
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
        tip={tip.password}
      />
      <Password
        name={"password"}
        state={inputs.confirmPassword}
        placeholder={"تکرار رمز عبور"}
        title={"تکرار رمز عبور"}
        error={errors.confirmPassword}
        onChange={onChange}
      />
      <Button variation={"fill"}>ثبت‌نام</Button>
    </Form>
  );
};

export default SignUpForm;
