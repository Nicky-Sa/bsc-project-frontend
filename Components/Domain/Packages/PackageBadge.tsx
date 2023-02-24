import React from "react";
import { Crown1 } from "iconsax-react";
import IconText from "@/Components/UI/IconText";
import Chips from "@/Components/UI/Chips";
import { Popover } from "antd";
import { packageType } from "@/Components/Domain/Packages/types";
import PackagePopover from "@/Components/Domain/Packages/PackagePopover";
import "@/global/antStyles.css";
import { extractPackageInfo } from "@/Components/Domain/Packages/functions";

const PackageBadge: React.FC<packageType> = ({ level, daysLeft }) => {
  let iconClassName = level ? `text-badge-${level}` : "text-neutral-8";
  const [packageName, packageImg] = extractPackageInfo(level);

  return (
    <Popover
      content={
        <PackagePopover
          packageName={packageName as string}
          packageImg={packageImg as number}
          level={level}
          daysLeft={daysLeft}
        />
      }
    >
      <div>
        <Chips className={"bg-neutral-2/30"}>
          <IconText size={"b2"} className={"items-center"}>
            <Crown1 size={"20"} className={iconClassName} />
            {packageName ? <p className={"b1"}>پکیچ {packageName}</p> : <p className={"b1"}>بدون پکیج فعال</p>}
          </IconText>
        </Chips>
      </div>
    </Popover>
  );
};

export default PackageBadge;
