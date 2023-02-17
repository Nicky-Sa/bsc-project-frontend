import React from "react";
import BatteryUsage from "@/Components/Pages/DashboardHome/BatteryUsage";
import CurrentLocationMap from "@/Components/Pages/DashboardHome/CurrentLocationMap";

const DashboardPage: React.FC = () => {
  return (
    <>
      <CurrentLocationMap />

      <div className={"flex flex-row gap-4"}>
        <BatteryUsage />
      </div>
    </>
  );
};

export default DashboardPage;
