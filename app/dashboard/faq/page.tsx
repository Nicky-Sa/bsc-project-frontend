import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import Faq from "@/Components/FAQ/Faq";

const DashboardPage: React.FC = () => {
  return (
    <DarkContainer className={"w-full"} size={"free"}>
      <Faq />
    </DarkContainer>
  );
};

export default DashboardPage;
