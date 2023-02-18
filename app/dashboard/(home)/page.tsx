import React from "react";
import BatteryUsage from "@/Components/Domain/DashboardHome/BatteryUsage";
import CurrentLocationMap from "@/Components/Domain/DashboardHome/CurrentLocationMap";
import MessagesTable from "@/Components/Domain/DashboardHome/MessagesTable";
import { tagzMessages } from "@/mock/tagzMessages";
import { tagzBatteries } from "@/mock/tagzBatteries";
import { tagzCurrentLocation } from "@/mock/tagzCurrentLocation";

const DashboardPage: React.FC = () => {
  return (
    <>
      <CurrentLocationMap data={tagzCurrentLocation} />

      <div className={"flex flex-col lg:flex-row gap-4"}>
        <MessagesTable data={tagzMessages} />
        <BatteryUsage data={tagzBatteries} />
      </div>
    </>
  );
};

export default DashboardPage;
