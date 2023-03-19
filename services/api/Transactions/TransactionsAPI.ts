import axios from "axios";
import { parseCookie } from "@/services/api/functions";
import { cookieType } from "@/services/api/types";
import process from "process";

export default class TransactionsAPI {
  static init(cookies?: cookieType[]) {
    const headers = {
      Accept: "application/json",
      Cookie: parseCookie(cookies),
    };

    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_ROUTE + "/transactions",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static getAll = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/all");
  };
}
