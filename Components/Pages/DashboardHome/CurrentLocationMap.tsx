"use client";
import React from "react";
import MultipleMarkers from "@/Components/Map/Marker/MultipleMarkers";
import { tagzCurrentLocation } from "@/mock/tagzCurrentLocation";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/Components/Map/Map"), {
  loading: () => <p>درحال بارگذاری نقشه...</p>,
  ssr: false,
});
const CurrentLocationMap: React.FC = () => {
    return (
      <DarkContainer size={"fit"}>
        <Map height={500}>{<MultipleMarkers locations={tagzCurrentLocation} />}</Map>
      </DarkContainer>
  );
};

export default CurrentLocationMap;
