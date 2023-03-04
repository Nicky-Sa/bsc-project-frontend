import axios from "axios";
import { baseRoute } from "@/utils/consts";
import { parseCookie } from "@/services/api/functions";
import { cookieType } from "@/services/api/types";

export default class TransactionsAPI {
  static init(cookies?: cookieType[]) {
    const headers = {
      Accept: "application/json",
      Cookie: parseCookie(cookies),
    };

    return axios.create({
      baseURL: baseRoute + "/transactions",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static getAll = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/all");
  };
}
