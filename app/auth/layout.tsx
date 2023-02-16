import React from "react";
import { getUser } from "@/utils/functions";
import { redirect } from "next/navigation";
import SetUser from "@/Components/Dasboard/SetUser";
import { cookies } from "next/headers";

const AuthLayout: ({ children }: { children: any }) => Promise<JSX.Element> = async ({ children }) => {
  /*
  ServerSide code to check user token:
  */
  const cookieStore = cookies();
  const user = await getUser(cookieStore);

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className={"p-4"}>
      <SetUser user={user} />
      {children}
    </div>
  );
};

export default AuthLayout;
