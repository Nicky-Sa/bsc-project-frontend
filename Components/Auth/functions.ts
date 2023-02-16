import { errorNotify, successNotify } from "@/Components/Notification/Toast";
import { authType } from "@/services/api/types";
import { AxiosResponse } from "axios";
import { translateErrors } from "@/utils/functions";
import { toastRedirectTimeout } from "@/utils/consts";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const authHandler = (
  inputs: any,
  apiHandler: { (data: authType): Promise<AxiosResponse> },
  router: AppRouterInstance
) => {
  return async () => {
    try {
      const data = (
        await apiHandler({
          username: inputs.username,
          password: inputs.password,
        })
      ).data;
      successNotify(data.message);
      setTimeout(() => {
        router.replace("/dashboard");
      }, toastRedirectTimeout);
    } catch (error) {
      errorNotify(translateErrors(error));
      console.log(error);
    }
  };
};
