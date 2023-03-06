import axios from "axios";
import { parseCookie } from "@/services/api/functions";
import { cookieType } from "@/services/api/types";
import process from "process";

export default class TagzDataAPI {
  static init(cookies?: cookieType[]) {
    const headers = {
      Accept: "application/json",
      Cookie: parseCookie(cookies),
    };

    return axios.create({
      baseURL: process.env.BASE_ROUTE + "/tagz-data",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static numberOfTagz = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/count");
  };

  static getTagzBatteries = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/batteries");
  };

  static getTagzMessages = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/messages");
  };

  static getTagzLocations = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/locations");
  };

  static getBalanceUsages = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/balanceUsages");
  };

}
