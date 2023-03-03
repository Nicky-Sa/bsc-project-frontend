import React from "react";
import CurrentLocationMap from "@/Components/Domain/DashboardHome/CurrentLocationMap";
import HistoryTableContainer from "@/Components/Domain/History/HistoryTableContainer";
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
