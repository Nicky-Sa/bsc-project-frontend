"use client";
import React, { useEffect, useState } from "react";
import Form from "@/Components/Form/Form";
import { canSubmit, changeInputs, checkPhoneNumber } from "@/Components/Form/functions";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { defaultFormType } from "@/Components/Profile/types";
import { updateUser } from "@/services/api/User/handlers";
import Text from "@/Components/Form/Text";
import { useRouter } from "next/navigation";

const SetPhoneNumberForm: React.FC<defaultFormType> = ({ defaultValue }) => {
  const [inputs, setInputs] = useState({
    phoneNumber: defaultValue ?? "",
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
  });

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      phoneNumber: checkPhoneNumber(inputs.phoneNumber),
    }));
  }, [inputs]);

  const router = useRouter();
  const onChange = changeInputs(setInputs, inputs);
  const onSubmit = updateUser(inputs, router);

  return (
    <DarkContainer className={"w-full flex flex-col gap-6"} size={"free"}>
      <h6>تغییر شماره موبایل</h6>
      <Form buttonText={"تایید"} onSubmit={onSubmit} buttonDisabled={canSubmit(inputs, errors)} buttonShape={"fit"}>
        <Text
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
