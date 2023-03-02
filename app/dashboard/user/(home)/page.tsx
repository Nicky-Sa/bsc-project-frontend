import React from "react";
import BatteryUsage from "@/Components/Domain/DashboardHome/BatteryUsage";
import CurrentLocationMap from "@/Components/Domain/DashboardHome/CurrentLocationMap";
import MessagesTableContainer from "@/Components/Domain/DashboardHome/MessagesTableContainer";
import { tagzCurrentLocation } from "@/mock/tagzCurrentLocation";
import { cookies } from "next/headers";
import { getTagzBatteries, getTagzMessages } from "@/services/api/TagzData/handlers";

const DashboardPage: () => Promise<JSX.Element> = async () => {
  /*
  ServerSide code to check user token:
  */
  const cookieStore = cookies();
  const tagzBatteries = await getTagzBatteries(cookieStore);
  const tagzMessages = await getTagzMessages(cookieStore);

  return (
    <>
      <CurrentLocationMap data={tagzCurrentLocation} />

      <div className={"flex flex-col lg:flex-row gap-4"}>
        <MessagesTableContainer data={tagzMessages.slice(-3)} />
        <BatteryUsage data={tagzBatteries} />
      </div>
    </>
  );
};

export default DashboardPage;
