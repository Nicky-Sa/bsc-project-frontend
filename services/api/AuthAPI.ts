import axios from "axios";
import { baseRoute } from "@/utils/consts";
import { authType } from "@/services/api/types";

export default class AuthAPI {
  static init() {
    let headers = {
      Accept: "application/json",
    };

    return axios.create({
      baseURL: baseRoute + "/auth",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static signup = async (data: authType) => {
    return await this.init().post("/signup", data);
  };

  static login = async (data: authType) => {
    return await this.init().post("/login", data);
  };
}
