"use client";
import React, { useState } from "react";
import Form from "@/Components/Form/Form";
import Text from "@/Components/Form/Text";
import { canSubmit, changeInputs } from "@/Components/Form/functions";
import { useRouter } from "next/navigation";
import { authHandler } from "@/Components/Domain/Auth/functions";
import AuthAPI from "@/services/api/AuthAPI";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { defaultFormType } from "@/Components/Domain/Profile/types";

const SetFullNameForm: React.FC<defaultFormType> = ({ defaultValue }) => {
  const [inputs, setInputs] = useState({
    fullName: defaultValue ?? "",
  });

  const router = useRouter();
  const onChange = changeInputs(setInputs, inputs);
  const onSubmit = authHandler(inputs, AuthAPI.login, router);

  return (
    <DarkContainer className={"w-full flex flex-col gap-6"} size={"free"}>
      <p className={"h6"}>تغییر نام</p>
      <Form buttonName={"تایید"} onSubmit={onSubmit} buttonDisabled={canSubmit(inputs)} buttonShape={"fit"}>
        <Text name={"fullName"} title={"نام و نام خانوادگی"} onChange={onChange} state={inputs.fullName} />
      </Form>
    </DarkContainer>
  );
};

export default SetFullNameForm;
