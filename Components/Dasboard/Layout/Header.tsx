import React from "react";
import Package from "@/Components/UI/Package";
import UserProfile from "@/Components/Dasboard/UserProfile";

const Header: React.FC = () => {
  return (
    <header className={"w-full py-1 pl-4 flex flex-row items-center justify-between b1"}>
      <h4 className={"h4"}>خانه</h4>
      <div className={"flex flex-row items-end gap-8"}>
        <Package level={"gold"} />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
