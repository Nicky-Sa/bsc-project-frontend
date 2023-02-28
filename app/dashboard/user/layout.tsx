import React from "react";
import SetUser from "@/Components/Dashboard/SetUser";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/services/api/User/handlers";

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
    <>
      <SetUser user={user} />
      {user && children}
    </>
  );
};

export default DashboardLayout;
