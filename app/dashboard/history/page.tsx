import React from "react";
import CurrentLocationMap from "@/Components/Domain/DashboardHome/CurrentLocationMap";
import { tagzCurrentLocation } from "@/mock/tagzCurrentLocation";
import HistoryTableContainer from "@/Components/Domain/History/HistoryTableContainer";
import { tagzLocationsHistory } from "@/mock/tagzLocationsHistory";

const HistoryPage: React.FC = () => {
  return (
    <>
      <CurrentLocationMap data={tagzCurrentLocation} />
      <HistoryTableContainer data={tagzLocationsHistory} />
    </>
  );
};

export default HistoryPage;
