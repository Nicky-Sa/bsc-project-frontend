"use client";
import React, { useEffect, useState } from "react";
import MultipleMarkers from "@/Components/Map/Marker/MultipleMarkers";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import dynamic from "next/dynamic";
import Chips from "@/Components/UI/Chips";
import { Skeleton } from "antd";
import { coordinateType } from "@/global/types";
import { tagzLocationsType } from "@/Components/History/types";

const Map = dynamic(() => import("@/Components/Map/Map"), {
  loading: () => <Skeleton active />,
  ssr: false,
});

type propsType = {
  data: tagzLocationsType[];
  count: number;
};
const CurrentLocationMap: React.FC<propsType> = ({ data, count }) => {
  const [locations, setLocations] = useState<coordinateType[]>([]);
  useEffect(() => {
    let latestLocations = [];

    for (let i = 1; i < count + 1; i++) {
      const eachTagLocations = data
        .slice()
        .reverse()
        .filter((item) => parseInt(item.tagId) === i);
      latestLocations.push(eachTagLocations[0]);
    }

    for (let item of latestLocations) {
      setLocations((prevLocations) => [...prevLocations, item.coordinate]);
    }
  }, [count, data]);
  return (
    <DarkContainer size={"fit"} className={"relative"}>
      <div className={"absolute z-20 top-[16px] right-[52px]"}>
        <Chips className={"bg-green-dark-1 shadow-md"}>
          <p className={"b1"}>اخرین موقعیت تگ‌ها</p>
        </Chips>
      </div>
      <Map height={450} zoom={11}>
        {<MultipleMarkers locations={locations} />}
      </Map>
    </DarkContainer>
  );
};

export default CurrentLocationMap;
