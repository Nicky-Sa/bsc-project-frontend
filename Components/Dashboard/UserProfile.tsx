"use client";
import React, { useEffect, useState } from "react";
import { Logout, Setting2, User } from "iconsax-react";
import DropDown from "@/Components/UI/DropDown";
import IconText from "@/Components/UI/IconText";
import Link from "next/link";
import { useSelector } from "react-redux";
import { storeType } from "@/store";
import { useRouter } from "next/navigation";
import { logoutHandler } from "@/services/api/Auth/handlers";

const UserProfile: React.FC = () => {
  const userInfo = useSelector((state: storeType) => state.currentUserReducer.userInfo);
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const dropdownItems = [
    {
      key: "1",
      label: (
        <Link href={"/dashboard/user/profile"}>
          <IconText className={"min-w-[10rem] items-center text-neutral-1"}>
            <Setting2 size="20" />
            <p>تنظیمات</p>
          </IconText>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={logoutHandler(router)}>
          <IconText className={"text-red-light-6 items-center"}>
            <Logout size="20" />
            <p>خروج</p>
          </IconText>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setFullName(userInfo.fullName ?? "کاربر عادی");
  }, [userInfo?.fullName]);

  return (
    <div className={"flex flex-row gap-2 b1"}>
      <div className={"-mb-[3px]"}>
        <DropDown items={dropdownItems}>
          <IconText className={"items-start b1"}>
            <User size="26" />
            <p>{fullName}</p>
          </IconText>
        </DropDown>
      </div>
    </div>
  );
};

export default UserProfile;
