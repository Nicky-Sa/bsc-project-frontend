import React from "react";
import { Crown1 } from "iconsax-react";
import IconText from "@/Components/UI/IconText";

type propsType = {
  level: "gold" | "silver" | "bronze";
};

const Package: React.FC<propsType> = ({ level }) => {
  let iconClassName = "";
  let packageName = ""
  switch (level) {
    case "gold":
      iconClassName += "text-badge-gold";
      packageName = "طلایی"
      break;
    case "silver":
      iconClassName += "text-badge-silver";
      packageName = "نقره‌ای"
      break;
    case "bronze":
      iconClassName += "text-badge-bronze";
      packageName = "برنز"
      break;
  }
  return <IconText containerClass={"bg-neutral-2/30 rounded-full items-center px-4"} size={"b2"}>
    <Crown1 size={"20"} className={iconClassName}/>
    <p>پکیچ {packageName}</p>
  </IconText>

};

export default Package;
