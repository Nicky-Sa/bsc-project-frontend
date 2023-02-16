import { PersianErrors } from "@/utils/persianTexts";
import UsersAPI from "@/services/api/UsersAPI";
import { RequestCookie } from "next/dist/server/web/spec-extension/cookies";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const translateErrors = (error: any) => {
  console.log(error);

  if (error?.message === "Network Error") {
    return PersianErrors.networkError;
  }
  return error?.response?.data.message.toString();
};

export const getUser = async (accessTokenCookie: RequestCookie | undefined) => {
  try {
    return (await UsersAPI.getUser([{name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};
