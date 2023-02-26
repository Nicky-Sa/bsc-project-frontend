"use client";
import React from "react";
import SetFullNameForm from "@/Components/Domain/Profile/SetFullNameForm";
import SetPhoneNumberForm from "@/Components/Domain/Profile/SetPhoneNumberForm";
import { useSelector } from "react-redux";
import { storeType } from "@/store";

const ProfilePage: React.FC = () => {
  const userInfo = useSelector((state: storeType) => state.currentUserReducer.userInfo);
  return (
    <div className={"flex flex-col md:flex-row w-full sm:w-[80%] md:w-full m-auto gap-8"}>
      <SetFullNameForm defaultValue={userInfo.fullName} />
      <SetPhoneNumberForm defaultValue={userInfo.phoneNumber} />
    </div>
  );
};

export default ProfilePage;
