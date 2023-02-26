import { PersianErrors } from "@/utils/persianTexts";

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


export const reformat = (number: number | string, postfix = "") => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (postfix ? (" " + postfix) : "");
};

export const sortById = (items: any[]) =>{
  return items.sort((a, b) => {
    return a.id.substr(1) - b.id.substr(1)
  })
}