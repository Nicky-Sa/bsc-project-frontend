import React from "react";
import BatteryUsage from "@/Components/Domain/DashboardHome/BatteryUsage";
import CurrentLocationMap from "@/Components/Domain/DashboardHome/CurrentLocationMap";
import MessagesTableContainer from "@/Components/Domain/DashboardHome/MessagesTableContainer";
import { tagzMessages } from "@/mock/tagzMessages";
import { tagzBatteries } from "@/mock/tagzBatteries";
import { tagzCurrentLocation } from "@/mock/tagzCurrentLocation";

const DashboardPage: React.FC = () => {
  return (
    <>
      <CurrentLocationMap data={tagzCurrentLocation} />

      <div className={"flex flex-col lg:flex-row gap-4"}>
        <MessagesTableContainer data={tagzMessages.slice(0, 3)} />
        <BatteryUsage data={tagzBatteries} />
      </div>
    </>
  );
};

export default DashboardPage;
