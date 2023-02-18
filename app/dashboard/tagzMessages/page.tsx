import React from "react";
import { tagzMessages } from "@/mock/tagzMessages";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import Table from "@/Components/Domain/Messages/Table";

const DashboardPage: React.FC = () => {
  return (
    <DarkContainer className={"w-full"} size={"free"}>
      <Table data={tagzMessages} />
    </DarkContainer>
  );
};

export default DashboardPage;
