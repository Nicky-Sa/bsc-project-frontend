"use client";
import React from "react";
import MultipleMarkers from "@/Components/Map/Marker/MultipleMarkers";
import { tagzCurrentLocation } from "@/mock/tagzCurrentLocation";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import dynamic from "next/dynamic";
import Chips from "@/Components/UI/Chips";

const Map = dynamic(() => import("@/Components/Map/Map"), {
  loading: () => <p>درحال بارگذاری نقشه...</p>,
  ssr: false,
});
const CurrentLocationMap: React.FC = () => {
  return (
    <DarkContainer size={"fit"} className={"relative"}>
      <div className={"absolute z-20 top-[3%] right-[4%]"}>
        <Chips className={"bg-green-dark-1 shadow-md"}>
          <p className={"b1"}>موقعیت زنده تگ‌ها</p>
        </Chips>
      </div>
      <Map height={500}>{<MultipleMarkers locations={tagzCurrentLocation} />}</Map>
    </DarkContainer>
  );
};

export default CurrentLocationMap;
