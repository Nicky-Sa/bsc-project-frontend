import axios from "axios";
import { coordinateType } from "@/global/types";

export default class MapAPI {
  static init() {
    const headers = {
      Accept: "application/json",
      "x-api-key":
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc3OTEwN2I5M2UwNmJmYTY1ZjA3N2FjNGZiYTZjZWJmOGNlNjc3MjE1YzNiZTU2YmVhYmViMTVlMjE4MDQ1MDAwOTFkN2VhZTE5Y2I1NTc3In0.eyJhdWQiOiIyMTAwMiIsImp0aSI6Ijc3OTEwN2I5M2UwNmJmYTY1ZjA3N2FjNGZiYTZjZWJmOGNlNjc3MjE1YzNiZTU2YmVhYmViMTVlMjE4MDQ1MDAwOTFkN2VhZTE5Y2I1NTc3IiwiaWF0IjoxNjc1NzY4MzU0LCJuYmYiOjE2NzU3NjgzNTQsImV4cCI6MTY3ODI3Mzk1NCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.hH1TdXuEMEZ0jbhPGuw_LFrT86lHv5_PXNUDRG2Pe4tvLa-eCSxTgMTUwswdypW1CMYuV_DduOn1k_EgWJok_fGBXcQc3YN75f1rFh7liaoCDpaKiBSpj9S-dJpCjLh817Jtv1Ay4Z7DaEHkfW0XgITzYxpCAYcBVOFh-pEDzgRP3baz7_VlrugGqo-tDqmNweI2ZXdjjO9JqQIrWQqJSpR1BE_secBtZVVtmei6CdnSS36Oo7fkXWztMz7c6jukDWXpy4b4eiVayshVxjP_zhVGtUJLwApzgsZo70L_5YgtNqMUFY0z5DcRcAHFTkbP9osc-HOCJGF0tDhRCN1EUg",
    };

    return axios.create({
      baseURL: "https://map.ir",
      timeout: 31000,
      headers: headers,
    });
  }

  static coordinateToAddress = async (coordinate: coordinateType) => {
    return await this.init().get(`/reverse/no?lat=${coordinate.lat}&lon=${coordinate.lon}`);
  };
}
