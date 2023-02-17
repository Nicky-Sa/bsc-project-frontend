import React from "react";
// @ts-ignore
import Mapir from "mapir-react-component";
import { coordinateType } from "@/services/api/types";
import Marker from "@/Components/Map/Marker/Marker";

type propsType = {
  locations: coordinateType[];
};

const MultipleMarkers: React.FC<propsType> = ({ locations }) => {

  return (
    <>
      {locations.map((location, i) => (
        <Marker key={i} lon={location.lon} lat={location.lat} />
      ))}
    </>
  );
};

export default MultipleMarkers;
