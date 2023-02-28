import axios from "axios";
import { baseRoute } from "@/utils/consts";
import { authType } from "@/services/api/Auth/types";

export default class AuthAPI {
  static init() {
    const headers = {
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

  static logout = async () => {
    return await this.init().get("/logout");
  };
}
