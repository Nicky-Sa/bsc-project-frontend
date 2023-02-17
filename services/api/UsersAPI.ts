import axios from "axios";
import { baseRoute } from "@/utils/consts";
import { cookieType } from "@/services/api/types";
import { parseCookie } from "@/services/api/functions";

export default class UsersAPI {
  static init(cookies: cookieType[]) {
    let headers = {
      Accept: "application/json",
      Cookie: parseCookie(cookies),
    };

    return axios.create({
      baseURL: baseRoute + "/users",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static getUser = async (cookies: cookieType[]) => {
    return await this.init(cookies).get("/current");
  };
}
