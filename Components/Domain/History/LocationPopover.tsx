"use client";
import React, { useEffect, useState } from "react";
import { coordinateType } from "@/global/types";
import dynamic from "next/dynamic";
import { Skeleton } from "antd";
import "@/global/antStyles.css";
import { getAddress } from "@/Components/Map/functions";
// @ts-ignore
import Mapir from "mapir-react-component";

const Map = dynamic(() => import("@/Components/Map/Map"), {
  loading: () => <Skeleton active />,
  ssr: false,
});

const LocationPopover: React.FC<coordinateType> = ({ lon, lat }) => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    getAddress({ lon, lat })
      .then((address) => {
        setAddress(address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lat, lon]);

  return (
    <div className={"w-[200px] sm:w-[250px] flex flex-col gap-4"}>
      <div className={"hidden md:block"}>
      <Map height={250} center={{ lon, lat }} zoom={13}>
        <Mapir.Marker coordinates={[lon, lat]} anchor="bottom" Image={"/pin.png"} />
      </Map>
      </div>
      <p className={"b1"}>{address}</p>
    </div>
  );
};

export default LocationPopover;
