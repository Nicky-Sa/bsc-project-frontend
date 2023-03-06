import axios from "axios";
import process from "process";

export default class PackagesAPI {
  static init() {
    const headers = {
      Accept: "application/json",
    };

    return axios.create({
      baseURL: process.env.BASE_ROUTE + "/packages",
      timeout: 31000,
      headers: headers,
    });
  }

  static getAll = async () => {
    return await this.init().get("/all");
  };
}
