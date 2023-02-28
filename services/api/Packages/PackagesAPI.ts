import axios from "axios";
import { baseRoute } from "@/utils/consts";
import { wait } from "@antv/component/lib/util/util";

export default class PackagesAPI {
  static init() {
    const headers = {
      Accept: "application/json",
    };

    return axios.create({
      baseURL: baseRoute + "/packages",
      withCredentials: true,
      timeout: 31000,
      headers: headers,
    });
  }

  static getAll = async () => {
    await wait(40000)
    return await this.init().get("/all");
  };
}
