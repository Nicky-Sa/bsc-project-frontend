import React from "react";
import CurrentLocationMap from "@/Components/Dashboard/DashboardHome/CurrentLocationMap";
import HistoryTableContainer from "@/Components/History/HistoryTableContainer";
import { getTagzLocations, numberOfTagz } from "@/services/api/TagzData/handlers";
import { cookies } from "next/headers";

const HistoryPage: () => Promise<JSX.Element> = async () => {
  const cookieStore = cookies();
  const tagzLocationsHistory = await getTagzLocations(cookieStore);
  const count = await numberOfTagz(cookieStore);

  return (
    <>
      <CurrentLocationMap data={tagzLocationsHistory} count={count} />
      <HistoryTableContainer data={tagzLocationsHistory} />
    </>
  );
};

export default HistoryPage;
