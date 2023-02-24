import { cookieType } from "@/services/api/User/types";

export const parseCookie = (cookies?: cookieType[]) => {
  let cookieString = "";
  cookies?.forEach((cookie) => {
    cookieString = cookieString.concat(cookie.name, "=", cookie.value, "; ");
  });
  return cookieString;
};