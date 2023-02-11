import axios from "axios";
import { baseRoute } from "@/utils/consts";

export default class UsersAPI {
  static init() {
    let headers = {
      Accept: "application/json",
    };

    return axios.create({
      baseURL: baseRoute + "/users",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static getUser = async () => {
    return await this.init().get("/current");
  };
}
