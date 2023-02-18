"use client";
import React from "react";
// @ts-ignore
import Mapir from "mapir-react-component";
import "mapir-react-component/dist/index.css";
import { mapStyles } from "@/Components/Map/mapStyles";
import { childrenType, coordinateType } from "@/global/types";

const defaultCanter = [51.336281, 35.699731];

const Map = Mapir.setToken({
  transformRequest: (url: any) => {
    return {
      url: url,
      headers: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc3OTEwN2I5M2UwNmJmYTY1ZjA3N2FjNGZiYTZjZWJmOGNlNjc3MjE1YzNiZTU2YmVhYmViMTVlMjE4MDQ1MDAwOTFkN2VhZTE5Y2I1NTc3In0.eyJhdWQiOiIyMTAwMiIsImp0aSI6Ijc3OTEwN2I5M2UwNmJmYTY1ZjA3N2FjNGZiYTZjZWJmOGNlNjc3MjE1YzNiZTU2YmVhYmViMTVlMjE4MDQ1MDAwOTFkN2VhZTE5Y2I1NTc3IiwiaWF0IjoxNjc1NzY4MzU0LCJuYmYiOjE2NzU3NjgzNTQsImV4cCI6MTY3ODI3Mzk1NCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.hH1TdXuEMEZ0jbhPGuw_LFrT86lHv5_PXNUDRG2Pe4tvLa-eCSxTgMTUwswdypW1CMYuV_DduOn1k_EgWJok_fGBXcQc3YN75f1rFh7liaoCDpaKiBSpj9S-dJpCjLh817Jtv1Ay4Z7DaEHkfW0XgITzYxpCAYcBVOFh-pEDzgRP3baz7_VlrugGqo-tDqmNweI2ZXdjjO9JqQIrWQqJSpR1BE_secBtZVVtmei6CdnSS36Oo7fkXWztMz7c6jukDWXpy4b4eiVayshVxjP_zhVGtUJLwApzgsZo70L_5YgtNqMUFY0z5DcRcAHFTkbP9osc-HOCJGF0tDhRCN1EUg",
        "Mapir-SDK": "reactjs",
      },
    };
  },
});

type propsType = {
  height: number; // in px
  center?: coordinateType;
  zoom: number
};

const MapWrapper: React.FC<childrenType & propsType> = ({ children, height, center, zoom }) => {
  return (
    <Mapir
      center={center ? [center.lon, center.lat] : defaultCanter}
      Map={Map}
      containerStyle={{
        height: `${height}px`,
        width: "100%",
      }}
      style={mapStyles.dark.url}
      userLocation
      zoom={[zoom]}
    >
      {children}
    </Mapir>
  );
};

export default MapWrapper;
