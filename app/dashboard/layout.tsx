import React from "react";
import SidebarFixed from "@/Components/Dashboard/Layout/SidebarFixed";
import Main from "@/Components/Dashboard/Layout/Main";
import Header from "@/Components/Dashboard/Layout/Header";

//TODO: fix the comment

const DashboardLayout: ({ children }: { children: any }) => Promise<JSX.Element> = async ({ children }) => {
  /*
  ServerSide code to check user token:
  */
  // const cookieStore = cookies();
  // const user = await getUser(cookieStore);
  //
  // if (!user) {
  //   redirect("/auth");
  // }

  return (
    <div className={"p-4 flex flex-row gap-6 bg-primary-dark-7 min-h-screen"}>
      {/*<SetUser user={user} />*/}
      <SidebarFixed />
      <div className={"flex flex-col w-full pt-6 gap-6 lg:w-[70%] 2xl:w-[80%]"}>
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default DashboardLayout;
