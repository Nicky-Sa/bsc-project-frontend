"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import { Add, HambergerMenu } from "iconsax-react";
import "@/Components/antReStyles.css";
import Sidebar from "@/Components/Dasboard/Layout/Sidebar";

const SidebarDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HambergerMenu size="24" className={"lg:hidden"} onClick={showDrawer} />
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={<Add size="32" color={"#FFF"} className={"rotate-45"} />}
      >
        <aside>
          <Sidebar />
        </aside>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
