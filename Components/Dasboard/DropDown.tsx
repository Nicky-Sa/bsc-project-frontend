"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { childrenType } from "@/global/types";
import "./styles.css";
import { ArrowDown2 } from "iconsax-react";
import { classNames } from "@/utils/functions";

type propsType = {
  items: MenuProps["items"];
};

const DropDown: React.FC<childrenType & propsType> = ({ children, items }) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Dropdown menu={{ items }} trigger={["click"]} onOpenChange={onOpenChange}>
      <div className={"flex flex-row items-center"}>
        {children}
        <ArrowDown2 size="20" className={classNames(open ? "rotate-180" : "", "transition-all duration-500")}/>
      </div>
    </Dropdown>
  );
};

export default DropDown;
