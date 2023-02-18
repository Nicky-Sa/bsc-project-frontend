import { coordinateType } from "@/global/types";
import MapAPI from "@/services/api/MapAPI";

export const getAddress = async (location: coordinateType) => {
  try {
    return (await MapAPI.coordinateToAddress(location)).data.address;
  } catch (error) {
    throw error;
  }
};
