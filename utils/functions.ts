import { PersianErrors } from "@/utils/persianTexts";

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
