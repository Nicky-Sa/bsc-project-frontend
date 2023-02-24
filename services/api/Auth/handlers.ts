import { errorNotify, successNotify } from "@/Components/Notification/Toast";
import { AxiosResponse } from "axios";
import { translateErrors } from "@/utils/functions";
import { toastRedirectTimeout } from "@/utils/consts";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import AuthAPI from "@/services/api/Auth/AuthAPI";
import { authType } from "@/services/api/Auth/types";

export const authHandler =
  (inputs: any, apiHandler: { (data: authType): Promise<AxiosResponse> }, router: AppRouterInstance) => async () => {
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
    }
  };

export const logoutHandler = (router: AppRouterInstance) => async () => {
  try {
    const data = (await AuthAPI.logout()).data;
    successNotify(data.message);
    setTimeout(() => {
      router.replace("/auth");
    }, toastRedirectTimeout);
  } catch (error) {
    errorNotify(translateErrors(error));
  }
};
