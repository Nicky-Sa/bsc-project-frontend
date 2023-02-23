"use client";
import React, { useState } from "react";
import { Tab as HeadlessTab } from "@headlessui/react";
import { classNames } from "@/utils/functions";

type propsType = {
  tabItems: {
    label: string;
    children: React.ReactNode;
  }[];
};


const Tab: React.FC<propsType> = ({tabItems}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <HeadlessTab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <HeadlessTab.List className={"w-full flex justify-center items-center gap-12 focus:ring-0 focus:outline-0"}>
        {tabItems.map((item, i) => (
          <HeadlessTab
            key={i}
            className={classNames(
              "transition-all duration-300 flex flex-col gap-2 focus:ring-0 focus:outline-0 justify-center items-center"
            )}
          >
            <h6 className={classNames(selectedIndex === i ? "text-neutral-1" : "text-neutral-3", "px-8 h6")}>
              {item.label}
            </h6>
            <div
              className={classNames(
                selectedIndex === i ? "opacity-100" : "opacity-0",
                "transition-all duration-500 h-1 w-full bg-primary-dark-1 "
              )}
            />
          </HeadlessTab>
        ))}
      </HeadlessTab.List>
      <HeadlessTab.Panels className={"w-full"}>
        {tabItems.map((item, i) => (
          <HeadlessTab.Panel key={i}>{item.children}</HeadlessTab.Panel>
        ))}
      </HeadlessTab.Panels>
    </HeadlessTab.Group>
  );
};

export default Tab;
