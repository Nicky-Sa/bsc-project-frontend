import React from "react";
import BatteryUsage from "@/Components/Pages/DashboardHome/BatteryUsage";
import CurrentLocationMap from "@/Components/Pages/DashboardHome/CurrentLocationMap";
import MessagesTable from "@/Components/Pages/DashboardHome/MessagesTable";

const DashboardPage: React.FC = () => {
  return (
    <>
      <CurrentLocationMap />

      <div className={"flex flex-col lg:flex-row gap-4"}>
        <MessagesTable />
        <BatteryUsage />
      </div>
    </>
  );
};

export default DashboardPage;
