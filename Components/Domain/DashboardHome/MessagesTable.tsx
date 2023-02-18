"use client";
import React from "react";
import Table from "@/Components/Domain/Messages/Table";
import "@/Components/antStyles.css";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import Button from "@/Components/UI/Button";
import IconText from "@/Components/UI/IconText";
import { ArrowLeft2 } from "iconsax-react";
import { MessagesType } from "@/global/types";
import Link from "next/link";

type propsType = {
  data: MessagesType[];
};

const MessagesTable: React.FC<propsType> = ({ data }) => {
  return (
    <DarkContainer className={"basis-1/2 flex flex-col gap-4"} size={"free"}>
      <div className={"flex flex-row items-center justify-between"}>
        <h6 className={"h6"}>پیام‌های دریافتی از تگ‌ها</h6>
        <Button variation={"text"}>
          <IconText className={"items-center"}>
            <Link href={"/dashboard/tagzMessages"} className={"b1"}>نمایش همه</Link>
            <ArrowLeft2 size="24" className={"mb-[3px]"} />
          </IconText>
        </Button>
      </div>
      <Table data={data} />
    </DarkContainer>
  );
};

export default MessagesTable;
