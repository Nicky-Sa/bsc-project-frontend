export type packageType = {
  currentPackageLevel: "gold" | "silver" | "bronze" | null;
  currentBalance: number;
};

export type singlePackageType = {
    level: string;
    features: {
      key: string;
      value: string | number;
      unit?: string;
    }[];
};