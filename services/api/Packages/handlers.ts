import PackagesAPI from "@/services/api/Packages/PackagesAPI";

export const getAllPackages = async () => (await PackagesAPI.getAll()).data.data;