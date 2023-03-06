import PackagesAPI from "@/services/api/Packages/PackagesAPI";

export const getAllPackages = async () => {
  try {
    return (await PackagesAPI.getAll()).data.data;
  }
  catch (error: any) {
    console.log(error?.response?.data);
  }

};