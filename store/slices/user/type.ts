import { packageType } from "@/Components/Packages/types";

export type userState = {
  userInfo: {
    createdAt: string;
    updatedAt: string;
    username: string;
    phoneNumber: string | null;
    fullName: string | null;
  };
  packageInfo: packageType;
};