import React from "react";
import { redirect } from "next/navigation";
import SetUser from "@/Components/Dashboard/SetUser";
import { cookies } from "next/headers";
import { getUser } from "@/services/api/User/handlers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAGZ - Auth",
  description: "Authentication page",
  icons: "/fav.png",
};

const AuthLayout: ({ children }: { children: any }) => Promise<JSX.Element> = async ({ children }) => {
  /*
  ServerSide code to check user token:
  */
  const cookieStore = cookies();
  const user = await getUser(cookieStore);

  if (user) {
    redirect("/dashboard/user/home");
  }

  return (
    <div
      className={
        "p-4 min-h-screen bg-gradient-to-r from-primary-dark-10 to-primary-dark-2 flex items-center justify-center px-4 md:px-8"
      }
    >
      <SetUser user={user} />
      {children}
    </div>
  );
};

export default AuthLayout;
