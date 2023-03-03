"use client";
import React, { useEffect, useState } from "react";
import { Crown1 } from "iconsax-react";
import IconText from "@/Components/UI/IconText";
import Chips from "@/Components/UI/Chips";
import { Popover } from "antd";
import { packageType } from "@/Components/Domain/Packages/types";
import PackagePopover from "@/Components/Domain/Packages/PackagePopover";

import { extractPackageInfo } from "@/Components/Domain/Packages/functions";

const PackageBadge: React.FC<packageType> = ({ currentPackageLevel, currentBalance }) => {
  const [packageName, packageImg] = extractPackageInfo(currentPackageLevel as string);
  const [iconClassName, setIconClassName] = useState("");
  const [packageTitle, setPackageTitle] = useState("");
  useEffect(() => {
    setIconClassName(currentPackageLevel ? `text-badge-${currentPackageLevel}` : "text-neutral-8");
    setPackageTitle(packageName ? `پکیچ ${packageName}` : "بدون پکیج فعال");
  }, [currentPackageLevel, packageName]);

  return (
    <Popover
      content={
        <PackagePopover
          packageName={packageName as string}
          packageImg={packageImg as number}
          currentBalance={currentBalance}
        />
      }
    >
      <div>
        <Chips className={"bg-neutral-2/30"}>
          <IconText size={"b2"} className={"items-center"}>
            <Crown1 size={"20"} className={iconClassName} />
            <p className={"b1"}>{packageTitle}</p>
          </IconText>
        </Chips>
      </div>
    </Popover>
  );
};

export default PackageBadge;
