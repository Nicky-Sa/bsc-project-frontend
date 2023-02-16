import React from "react";
import { cookies } from "next/headers";
import { getUser } from "@/utils/functions";
import SetUser from "@/Components/Dasboard/SetUser";

const TokenCheckLayout: ({ children }: { children: any }) => Promise<JSX.Element> = async ({ children }) => {
  /*
  ServerSide code to check user token:
   */
  const cookieStore = cookies();
  const accessTokenCookie = cookieStore.get("accessToken");
  const user = await getUser(accessTokenCookie);

  return (
    <div className={"p-4"}>
      <SetUser user={user} />
      {children}
    </div>
  );
};

export default TokenCheckLayout;
