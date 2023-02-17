"use client";
import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import dynamic from "next/dynamic";
import { devicesBattery } from "@/mock/devicesBattery";
import MultipleMarkers from "@/Components/Map/Marker/MultipleMarkers";
import { tagzCurrentLocation } from "@/mock/tagzCurrentLocation";

const Map = dynamic(() => import("@/Components/Map/Map"), {
  loading: () => <p>درحال بارگذاری نقشه...</p>,
  ssr: false,
});

const MultiColumnChart = dynamic(() => import("@/Components/Charts/MultiColumnChart"), {
  loading: () => <p>درحال بارگذاری نمودار...</p>,
  ssr: false,
});

const DashboardPage: React.FC = () => {
  return (
    <>
      <DarkContainer>
        <Map height={500}>{<MultipleMarkers locations={tagzCurrentLocation} />}</Map>
      </DarkContainer>

      <div className={"flex flex-row gap-4"}>
        <DarkContainer className={"basis-1/2"}>
          <MultiColumnChart data={devicesBattery} />
        </DarkContainer>
      </div>
    </>
  );
};

export default DashboardPage;
