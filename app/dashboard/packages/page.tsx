import React from "react";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import Package from "@/Components/Domain/Packages/SinglePackage";
import { properties } from "@/mock/packagesProperties";

const PackagesPage: React.FC = () => {
  return (
    <DarkContainer className={"w-full flex flex-row flex-wrap gap-12 items-start justify-center"} size={"free"}>
      {properties.map((item, i) => (
        <Package key={i} properties={item} />
      ))}
    </DarkContainer>
  );
};

export default PackagesPage;
