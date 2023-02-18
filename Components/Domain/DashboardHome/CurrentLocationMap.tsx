"use client";
import React from "react";
import MultipleMarkers from "@/Components/Map/Marker/MultipleMarkers";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import dynamic from "next/dynamic";
import Chips from "@/Components/UI/Chips";
import { coordinateType } from "@/services/api/types";

const Map = dynamic(() => import("@/Components/Map/Map"), {
  loading: () => <p>درحال بارگذاری نقشه...</p>,
  ssr: false,
});

type propsType = {
  data: coordinateType[]
}
const CurrentLocationMap: React.FC<propsType> = ({data}) => {
  return (
    <DarkContainer size={"fit"} className={"relative"}>
      <div className={"absolute z-20 top-[16px] right-[52px]"}>
        <Chips className={"bg-green-dark-1 shadow-md"}>
          <p className={"b1"}>موقعیت زنده تگ‌ها</p>
        </Chips>
      </div>
      <Map height={450}>{<MultipleMarkers locations={data} />}</Map>
    </DarkContainer>
  );
};

export default CurrentLocationMap;
