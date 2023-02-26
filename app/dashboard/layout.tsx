import React, { Suspense } from "react";
import SidebarFixed from "@/Components/Dashboard/Layout/SidebarFixed";
import Main from "@/Components/Dashboard/Layout/Main";
import Header from "@/Components/Dashboard/Layout/Header";
import { childrenType } from "@/global/types";
import Loading from "@/app/dashboard/loading";

export const revalidate = 10;

const DashboardLayout: React.FC<childrenType> = ({children}) => {

  return (
    <Suspense fallback={<Loading/>}>
    <div className={"p-4 flex flex-row gap-6 bg-primary-dark-7 min-h-screen"}>
      <SidebarFixed />
      <div className={"flex flex-col w-full pt-6 gap-6 lg:w-[75%] 2xl:w-[80%]"}>
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
    </Suspense>
  );
};

export default DashboardLayout;
