"use client";
import React from "react";
// @ts-ignore
import Mapir from "mapir-react-component";
import { coordinateType } from "@/global/types";

const Marker: React.FC<coordinateType> = ({ lon, lat }) => {
  return <Mapir.Marker coordinates={[lon, lat]} anchor="bottom" Image={"/pin.png"} className={"cursor-pointer"} />;
};

export default Marker;
