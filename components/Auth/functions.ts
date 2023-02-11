import { errorNotify, successNotify } from "@/components/Notification/Toast";
import { authType } from "@/services/api/types";
import { AxiosResponse } from "axios";
import UsersAPI from "@/services/api/UsersAPI";
import { translateErrors } from "@/utils/functions";

export const authHandler = (inputs: any, apiHandler: { (data: authType): Promise<AxiosResponse> }) => {
  return async () => {
    try {
      const data = (
        await apiHandler({
          username: inputs.username,
          password: inputs.password,
        })
      ).data;
      const user = await UsersAPI.getUser();
      console.log(user);
      successNotify(data.message);
    } catch (error) {
      errorNotify(translateErrors(error));
      console.log(error);
    }
  };
};
