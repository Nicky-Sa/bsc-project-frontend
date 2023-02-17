import React, { useEffect, useState } from "react";
// @ts-ignore
import Mapir from "mapir-react-component";
import { coordinateType } from "@/services/api/types";
import MapAPI from "@/services/api/MapAPI";
import { Popover } from "antd";
import "@/Components/antStyles.css";

const Marker: React.FC<coordinateType> = ({ lon, lat }) => {
  const [address, setAddress] = useState("");

  const getAddress = (location: coordinateType) => {
    MapAPI.coordinateToAddress(location)
      .then((response) => {
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAddress({ lon, lat });
  }, [lat, lon]);

  return (
    <>
      <Popover content={address} title="موقعیت مکانی">
        <Mapir.Marker coordinates={[lon, lat]} anchor="bottom" Image={"/pin.png"} className={"cursor-pointer"} />
      </Popover>
    </>
  );
};

export default Marker;
