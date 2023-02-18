import { PersianErrors } from "@/utils/persianTexts";
import UsersAPI from "@/services/api/UsersAPI";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const translateErrors = (error: any) => {
  console.log(error);

  if (!error?.response?.data.message) {
    return PersianErrors.networkError;
  }
  return error?.response?.data.message.toString();
};

export const getUser = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    return (await UsersAPI.getUser([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};

export const nestedSearch: any = (array: any[], nestKey: string, searchKey: string, searchValue: string) => {
  for (const item of array) {
    if (item[searchKey].toString() === searchValue) {
      return item;
    }
    if (item[nestKey]) {
      return nestedSearch(item[nestKey], nestKey, searchKey, searchValue);
    }
  }
  return -1;
};
