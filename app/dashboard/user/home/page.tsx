import React from "react";
import BatteryUsage from "@/Components/Dashboard/DashboardHome/BatteryUsage";
import CurrentLocationMap from "@/Components/Dashboard/DashboardHome/CurrentLocationMap";
import MessagesTableContainer from "@/Components/Dashboard/DashboardHome/MessagesTableContainer";
import { cookies } from "next/headers";
import { getTagzBatteries, getTagzLocations, getTagzMessages, numberOfTagz } from "@/services/api/TagzData/handlers";

const DashboardPage: () => Promise<JSX.Element> = async () => {
  /*
  ServerSide code to check user token:
  */
  const cookieStore = cookies();
  const tagzBatteries = await getTagzBatteries(cookieStore);
  const tagzMessages = await getTagzMessages(cookieStore);
  const tagzLocationsHistory = await getTagzLocations(cookieStore);
  const count = await numberOfTagz(cookieStore);

  return (
    <>
      <CurrentLocationMap data={tagzLocationsHistory} count={count} />

      <div className={"flex flex-col lg:flex-row gap-4"}>
        <MessagesTableContainer data={tagzMessages.slice(-3)} />
        <BatteryUsage data={tagzBatteries} />
      </div>
    </>
  );
};

export default DashboardPage;
