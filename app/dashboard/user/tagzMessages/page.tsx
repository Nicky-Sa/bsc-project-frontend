import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import MessagesTable from "@/Components/Domain/Messages/MessagesTable";
import { cookies } from "next/headers";
import { getTagzMessages } from "@/services/api/TagzData/handlers";

const DashboardPage: () => Promise<JSX.Element> = async () => {
  const cookieStore = cookies();
  const tagzMessages = await getTagzMessages(cookieStore);

  return (
    <DarkContainer className={"w-full"} size={"free"}>
      <MessagesTable data={tagzMessages} />
    </DarkContainer>
  );
};

export default DashboardPage;
