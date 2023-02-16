import React from "react";
import { getUser } from "@/utils/functions";
import { cookies } from "next/headers";
import SetUser from "@/Components/Dasboard/SetUser";

//TODO: instead of main, add dashboard layout and main here.
const DashboardLayout: ({ children }: { children: any }) => Promise<JSX.Element> = async ({ children }) => {
  const cookieStore = cookies();
  const accessTokenCookie = cookieStore.get('accessToken')
  const user = await getUser(accessTokenCookie)
  // console.log(user)

  return (
    <div className = {"p-4"}>
      <SetUser user={user}/>
      {children}
    </div>
  );
};

export default DashboardLayout;
