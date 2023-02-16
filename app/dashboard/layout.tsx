import React from "react";
import { getUser } from "@/utils/functions";
import { redirect } from "next/navigation";
import SetUser from "@/Components/Dasboard/SetUser";
import { cookies } from "next/headers";
import Sidebar from "@/Components/Dasboard/Layout/Sidebar";
import Main from "@/Components/Dasboard/Layout/Main";
import Header from "@/Components/Dasboard/Layout/Header";

//TODO: instead of (home), add dashboard layout and (home) here.

const DashboardLayout: ({ children }: { children: any }) => Promise<JSX.Element> = async ({ children }) => {
  /*
  ServerSide code to check user token:
  */
  const cookieStore = cookies();
  const user = await getUser(cookieStore);

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className={"p-4 flex flex-row gap-6 bg-primary-dark-7 min-h-screen"}>
      <SetUser user={user} />
      <Sidebar />
      <div className={"flex flex-col w-[87%] lg:w-[82%] pt-6 gap-6"}>
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default DashboardLayout;
