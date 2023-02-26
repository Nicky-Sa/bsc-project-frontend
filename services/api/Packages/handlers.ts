import PackagesAPI from "@/services/api/Packages/PackagesAPI";

export const getAllPackages = async () => {
  return (await PackagesAPI.getAll()).data.data;
};