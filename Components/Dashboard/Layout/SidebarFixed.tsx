"use client";
import React from "react";
import Sidebar from "@/Components/Dashboard/Layout/Sidebar";

const SidebarFixed: React.FC = () => {
  return (
    <aside className="hidden lg:block min-h-full z-10 lg:w-[25%] 2xl:w-[20%]">
      <Sidebar />
    </aside>
  );
};

export default SidebarFixed;
