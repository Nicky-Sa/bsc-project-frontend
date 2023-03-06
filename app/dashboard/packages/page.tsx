import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { getAllPackages } from "@/services/api/Packages/handlers";
import { singlePackageType } from "@/Components/Domain/Packages/types";
import Package from "@/Components/Domain/Packages/SinglePackage";

const PackagesPage: () => Promise<JSX.Element> = async () => {
  const packagesProperties = await getAllPackages();
  return (
    <DarkContainer className={"w-full flex flex-row flex-wrap gap-12 items-start justify-center"} size={"free"}>
      {packagesProperties?.map((item: singlePackageType, i: number) => (
        <Package key={i} features={item.features} level={item.level} />
      ))}
    </DarkContainer>
  );
};

export default PackagesPage;