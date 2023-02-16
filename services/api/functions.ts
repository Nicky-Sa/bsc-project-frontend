import { cookie } from "@/services/api/types";

export const parseCookie = (cookies: cookie[]) => {
  let cookieString = "";
  cookies?.forEach((cookie) => {
    cookieString = cookieString.concat(cookie.name, "=", cookie.value, "; ");
  });
  return cookieString;
};