import React from "react";
import { tagzMessages } from "@/mock/tagzMessages";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import MessagesTable from "@/Components/Domain/Messages/MessagesTable";

const DashboardPage: React.FC = () => {
  return (
    <DarkContainer className={"w-full"} size={"free"}>
      <MessagesTable data={tagzMessages} />
    </DarkContainer>
  );
};

export default DashboardPage;
