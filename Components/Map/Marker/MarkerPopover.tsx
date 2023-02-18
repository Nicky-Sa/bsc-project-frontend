"use client";
import React, { useEffect, useState } from "react";
import { Popover } from "antd";
import "@/Components/antStyles.css";
import { coordinateType } from "@/global/types";
import { getAddress } from "@/Components/Map/functions";
// @ts-ignore
import Mapir from "mapir-react-component";

const MarkerPopover: React.FC<coordinateType> = ({ lon, lat }) => {
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
    <Popover content={address} title="موقعیت مکانی">
      <Mapir.Marker coordinates={[lon, lat]} anchor="bottom" Image={"/pin.png"} className={"cursor-pointer"} />
    </Popover>
  );
};

export default MarkerPopover;
