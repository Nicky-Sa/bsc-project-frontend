"use client";
import React, { useEffect, useState } from "react";
import Form from "@/Components/Form/Form";
import { canSubmit, changeInputs, checkPhoneNumber } from "@/Components/Form/functions";
import { useRouter } from "next/navigation";
import { authHandler } from "@/Components/Domain/Auth/functions";
import AuthAPI from "@/services/api/AuthAPI";
import Phone from "@/Components/Form/PhoneNumber";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { defaultFormType } from "@/Components/Domain/Profile/types";

const SetPhoneNumberForm: React.FC<defaultFormType> = ({ defaultValue }) => {
  const [inputs, setInputs] = useState({
    phoneNumber: defaultValue ?? "",
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
  });

  useEffect(() => {
    setErrors((prevInputs) => ({
      ...prevInputs,
      phoneNumber: checkPhoneNumber(inputs.phoneNumber),
    }));
  }, [inputs]);

  const router = useRouter();
  const onChange = changeInputs(setInputs, inputs);
  const onSubmit = authHandler(inputs, AuthAPI.login, router);

  return (
    <DarkContainer className={"w-full flex flex-col gap-6"} size={"free"}>
      <p className={"h6"}>تغییر شماره موبایل</p>
      <Form buttonName={"تایید"} onSubmit={onSubmit} buttonDisabled={canSubmit(inputs, errors)} buttonShape={"fit"}>
        <Phone
          name={"phoneNumber"}
          title={"شماره موبایل"}
          onChange={onChange}
          state={inputs.phoneNumber}
          error={errors.phoneNumber}
        />
      </Form>
    </DarkContainer>
  );
};

export default SetPhoneNumberForm;
