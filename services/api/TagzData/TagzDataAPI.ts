import axios from "axios";
import { baseRoute } from "@/utils/consts";
import { parseCookie } from "@/services/api/functions";
import { cookieType } from "@/services/api/types";

export default class TagzDataAPI {
  static init(cookies?: cookieType[]) {
    const headers = {
      Accept: "application/json",
      Cookie: parseCookie(cookies),
    };

    return axios.create({
      baseURL: baseRoute + "/tagz-data",
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
}
