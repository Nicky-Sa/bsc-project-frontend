import React from "react";
import MessagesTable from "@/Components/Messages/MessagesTable";

import DarkContainer from "@/Components/Dashboard/DarkContainer";
import Button from "@/Components/UI/Button";
import IconText from "@/Components/UI/IconText";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { messagesType } from "@/Components/Messages/types";

type propsType = {
  data: messagesType[];
};

const MessagesTableContainer: React.FC<propsType> = ({ data }) => {
  return (
    <DarkContainer className={"basis-1/2 flex flex-col gap-4"} size={"free"}>
      <div className={"flex flex-row items-center justify-between"}>
        <h6>پیام‌های دریافتی از تگ‌ها</h6>
        <Button variation={"text"}>
          <IconText className={"items-center"}>
            <Link href={"/dashboard/user/tagzMessages"} className={"b1"}>نمایش همه</Link>
            <ArrowLeft2 size="24" className={"mb-[3px]"} />
          </IconText>
        </Button>
      </div>
      <MessagesTable data={data} />
    </DarkContainer>
  );
};

export default MessagesTableContainer;
