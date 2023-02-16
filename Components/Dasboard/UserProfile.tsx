import React from "react";
import { Logout, ProfileCircle, User } from "iconsax-react";
import DropDown from "@/Components/Dasboard/DropDown";
import IconText from "@/Components/UI/IconText";

const dropdownItems = [
  {
    key: "1",
    label: (
      <IconText containerClass={"min-w-[10rem] items-center text-neutral-1"}>
        <ProfileCircle size="20" />
        <p>پروفایل</p>
      </IconText>
    ),
  },
  {
    key: "2",
    label: (
      <IconText containerClass={"text-red-light-6 items-center"}>
        <Logout size="20" />
        <p>خروج</p>
      </IconText>
    ),
  },
];

const UserProfile: React.FC = () => {
  return (
    <div className={"flex flex-row gap-2 b1"}>
      <div className={" -mb-[3px]"}>
        <DropDown items={dropdownItems}>
          <IconText containerClass={"items-start b1"}>
            <User size="26" />
            <p>نیک وین</p>
          </IconText>
        </DropDown>
      </div>
    </div>
  );
};

export default UserProfile;
