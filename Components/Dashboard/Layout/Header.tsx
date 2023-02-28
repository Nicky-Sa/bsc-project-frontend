"use client";
import React, { useEffect, useState } from "react";
import PackageBadge from "@/Components/Domain/Packages/PackageBadge";
import UserProfile from "@/Components/Dashboard/UserProfile";
import SidebarDrawer from "@/Components/Dashboard/Layout/SidebarDrawer";
import { usePathname } from "next/navigation";
import { nestedSearch } from "@/utils/functions";
import { navigation } from "@/utils/consts";
import { useSelector } from "react-redux";
import { storeType } from "@/store";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("");
  const packageInfo = useSelector((state: storeType) => state.currentUserReducer.packageInfo);

  useEffect(() => {
    const routeInfo = nestedSearch(navigation, null, "href", pathname);
    setPageTitle(routeInfo.name);
  }, [pathname]);

  return (
    <header className={"w-full py-1 pl-4 flex flex-row items-center justify-between b1"}>
      <h4 className={"hidden lg:block"}>{pageTitle}</h4>
      <SidebarDrawer />
      <div className={"flex flex-row items-end gap-8"}>
        <PackageBadge currentPackageLevel={packageInfo.currentPackageLevel} currentBalance={packageInfo.currentBalance} />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
