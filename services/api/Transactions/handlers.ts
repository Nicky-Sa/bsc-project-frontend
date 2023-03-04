import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";
import TransactionsAPI from "@/services/api/Transactions/TransactionsAPI";

export const getAllTransactions = async (cookieStore: RequestCookies | ReadonlyRequestCookies) => {
  const accessTokenCookie = cookieStore.get("accessToken");
  try {
    return (await TransactionsAPI.getAll([{ name: "accessToken", value: accessTokenCookie?.value ?? "" }])).data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
  }
};

