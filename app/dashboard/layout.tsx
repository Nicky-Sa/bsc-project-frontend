import React from "react";
import SidebarFixed from "@/Components/Dashboard/Layout/SidebarFixed";
import Main from "@/Components/Dashboard/Layout/Main";
import Header from "@/Components/Dashboard/Layout/Header";
import { childrenType } from "@/global/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TAGZ - Dashboard',
  description: 'Dashboard page',
};

export const revalidate = 10;

const DashboardLayout: React.FC<childrenType> = ({children}) => {

  return (
    <div className={"p-4 flex flex-row gap-6 bg-primary-dark-7 min-h-screen"}>
      <SidebarFixed />
      <div className={"flex flex-col w-full pt-6 gap-6 lg:w-[78%]"}>
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default DashboardLayout;
