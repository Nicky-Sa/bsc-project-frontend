import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import TagzDataAPI from "@/services/api/TagzData/TagzDataAPI";

export const numberOfTagz = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    return (await TagzDataAPI.numberOfTagz([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};

export const getTagzBatteries = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    return (await TagzDataAPI.getTagzBatteries([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data
      .data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};

export const getTagzMessages = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    return (await TagzDataAPI.getTagzMessages([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};

export const getTagzLocations = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    const data = (await TagzDataAPI.getTagzLocations([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
    for(let item of data){
      item.coordinate = {
        lat: item.lat,
        lon: item.lon
      }
      delete item.lat;
      delete item.lon;
    }
    return data
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};

export const getBalanceUsages = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    return (await TagzDataAPI.getBalanceUsages([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};