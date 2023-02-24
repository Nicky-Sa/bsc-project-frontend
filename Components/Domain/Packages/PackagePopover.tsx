import React from "react";
import Button from "@/Components/UI/Button";
import Link from "next/link";
import { reformat } from "@/utils/functions";

type propsType = {
  packageImg: number;
  packageName: string;
  balanceLeft: number;
};

const PackagePopover: React.FC<propsType> = ({ balanceLeft, packageImg, packageName }) => {
  return (
    <div className={"flex flex-col gap-4 items-center justify-center p-4 min-w-[17vw]"}>
      {packageImg && (
        <img
          src={`/packages/icon/package${packageImg}.png`}
          alt={`package${packageImg}`}
          className={"w-36 h-auto -mr-2"}
        />
      )}
      {packageName ? <h6>پکیچ {packageName}</h6> : <h6>بدون پکیج فعال</h6>}
      <p className={"b1 text-neutral-5"}>{reformat(balanceLeft, "تومان باقی مانده")}</p>
      <Button variation={"outline"}>
        <Link href={"/dashboard/packages"}>مشاهده پکیج‌ها</Link>
      </Button>
    </div>
  );
};

export default PackagePopover;
