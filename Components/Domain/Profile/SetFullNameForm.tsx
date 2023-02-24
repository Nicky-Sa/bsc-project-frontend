"use client";
import React, { useState } from "react";
import Form from "@/Components/Form/Form";
import Text from "@/Components/Form/Text";
import { canSubmit, changeInputs } from "@/Components/Form/functions";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { defaultFormType } from "@/Components/Domain/Profile/types";
import { updateUser } from "@/services/api/User/handlers";
import { useRouter } from "next/navigation";

const SetFullNameForm: React.FC<defaultFormType> = ({ defaultValue }) => {
  const [inputs, setInputs] = useState({
    fullName: defaultValue ?? "",
  });

  const router = useRouter();
  const onChange = changeInputs(setInputs, inputs);
  const onSubmit = updateUser(inputs, router);

  return (
    <DarkContainer className={"w-full flex flex-col gap-6"} size={"free"}>
      <h6>تغییر نام</h6>
      <Form buttonName={"تایید"} onSubmit={onSubmit} buttonDisabled={canSubmit(inputs)} buttonShape={"fit"}>
        <Text name={"fullName"} title={"نام و نام خانوادگی"} onChange={onChange} state={inputs.fullName} />
      </Form>
    </DarkContainer>
  );
};

export default SetFullNameForm;
