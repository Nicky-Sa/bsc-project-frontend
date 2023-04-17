import React from "react";
// @ts-ignore
import Mapir from "mapir-react-component";
import dynamic from "next/dynamic";
import { coordinateType } from "@/global/types";

const MarkerPopover = dynamic(() => import("@/Components/Map/Marker/MarkerPopover"), {
  loading: () => <p>...</p>,
  ssr: false,
});

type propsType = {
  locations: coordinateType[];
  tagIds: string[]
};

const MultipleMarkers: React.FC<propsType> = ({ locations, tagIds }) => {
  return (
    <>
      {locations.map((location, i) => (
        <MarkerPopover key={i} location={location} tagId={tagIds?.[i]} />
      ))}
    </>
  );
};

export default MultipleMarkers;
