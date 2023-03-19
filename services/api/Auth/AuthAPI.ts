import axios from "axios";
import { authType } from "@/services/api/Auth/types";
import * as process from "process";

export default class AuthAPI {
  static init() {
    const headers = {
      Accept: "application/json",
    };

    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_ROUTE + "/auth",
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

  static logout = async () => {
    return await this.init().get("/logout");
  };
}
