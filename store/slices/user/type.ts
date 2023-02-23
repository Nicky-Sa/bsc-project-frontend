import { packageType } from "@/Components/Domain/Packages/types";

export type userState = {
  userInfo: {
    createdAt: string;
    updatedAt: string;
    username: string;
    phoneNumber: string | null;
    fullName: string | null;
    role: string;
  };
  packageInfo: packageType;
};