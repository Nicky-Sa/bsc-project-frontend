import React from "react";
import Package from "@/Components/UI/Package";
import UserProfile from "@/Components/Dashboard/UserProfile";
import SidebarDrawer from "@/Components/Dashboard/Layout/SidebarDrawer";

const Header: React.FC = () => {
  return (
    <header className={"w-full py-1 pl-4 flex flex-row items-center justify-between b1"}>
      <h4 className={"h4 hidden lg:block"}>خانه</h4>
      <SidebarDrawer />
      <div className={"flex flex-row items-end gap-8"}>
        <Package level={"gold"} />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
