"use client";
import React, { useEffect, useState } from "react";
import { Popover } from "antd";

import { coordinateType } from "@/global/types";
import { getAddress } from "@/Components/Map/functions";
// @ts-ignore
import Mapir from "mapir-react-component";

type propsType = {
  tagId: string;
  location: coordinateType;
};

const MarkerPopover: React.FC<propsType> = ({ tagId, location }) => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    getAddress({ lon: location.lon, lat: location.lat })
      .then((address) => {
        setAddress(address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  return (
    <Popover content={address} title={`#${tagId}`}>
      <Mapir.Marker
        coordinates={[location.lon, location.lat]}
        anchor="bottom"
        Image={"/pin.png"}
        className={"cursor-pointer"}
      />
    </Popover>
  );
};

export default MarkerPopover;
