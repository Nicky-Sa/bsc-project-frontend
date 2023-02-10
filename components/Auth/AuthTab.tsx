"use client"
import React, {useState} from "react";
import {Tab} from '@headlessui/react'
import {classNames} from "@/utils/functions";

type propsType = {};

const tabItems = [
  {
    label: "ورود",
    key: "1",
    children: `Content of Tab Pane 1`,
  },
  {
    label: "ثبت‌نام",
    key: "2",
    children: `Content of Tab Pane 2`,
  },
]

const AuthTab: React.FC<propsType> = ({}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <Tab.Group selectedIndex = {selectedIndex} onChange = {setSelectedIndex}>
      <Tab.List
        className = {"w-full flex justify-center items-center gap-12 focus:ring-0 focus:outline-0"}>
        {
          tabItems.map((item, i) =>
            <Tab
              key = {i}
              className = {classNames("transition-all duration-400 flex flex-col gap-2 focus:ring-0 focus:outline-0 justify-center items-center")}>
              <p className = {classNames(selectedIndex === i ? "text-neutral-1" : "text-neutral-3", "px-4 b1")}>{item.label}</p>
              <div
                className = {classNames(selectedIndex === i ? "opacity-100" : "opacity-0", "transition-all duration-500 h-1 w-full bg-primary-dark-1 ")}/>
            </Tab>
          )
        }
      </Tab.List>
      <Tab.Panels>
        {
          tabItems.map((item, i) => (
            <Tab.Panel key = {i}>
              {item.children}
            </Tab.Panel>

          ))
        }
      </Tab.Panels>
    </Tab.Group>
  )
};

export default AuthTab;
