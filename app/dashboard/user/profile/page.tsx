"use client";
import React from "react";
import SetFullNameForm from "@/Components/Profile/SetFullNameForm";
import SetPhoneNumberForm from "@/Components/Profile/SetPhoneNumberForm";
import { useSelector } from "react-redux";
import { storeType } from "@/store";
import DarkContainer from "@/Components/Dashboard/DarkContainer";

const ProfilePage: React.FC = () => {
  const { userInfo, packageInfo } = useSelector((state: storeType) => state.currentUserReducer);
  const canEdit = packageInfo.currentPackageLevel === "gold";

  return (
    <div className={"flex flex-col md:flex-row w-full sm:w-[80%] md:w-full m-auto gap-8"}>
      {canEdit ? (
        <>
          <SetFullNameForm defaultValue={userInfo.fullName} />
          <SetPhoneNumberForm defaultValue={userInfo.phoneNumber} />
        </>
      ) : (
        <DarkContainer size={"free"}>
          <p className="b1">ویرایش این اطلاعات تنها مختص کاربران دارای پکیج طلایی است.</p>
        </DarkContainer>
      )}
    </div>
  );
};

export default ProfilePage;
