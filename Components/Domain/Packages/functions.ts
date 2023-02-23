export const extractPackageInfo = (level: string) => {
  let packageName = "";
  let packageImg;
  switch (level) {
    case "bronze":
      packageImg = 1;
      packageName = "برنزی";
      break;
    case "silver":
      packageImg = 2;
      packageName = "نقره‌ای";
      break;
    case "gold":
      packageImg = 3;
      packageName = "طلایی";
      break;
  }
  return [packageName, packageImg];
};
