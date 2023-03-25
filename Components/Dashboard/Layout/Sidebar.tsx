"use client";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { navigation } from "@/utils/consts";
import { classNames } from "@/utils/functions";
import CopyRight from "@/Components/UI/CopyRight";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <div
      className={
        "py-6 px-4 flex flex-col gap-12 items-center justify-between bg-primary-dark-5 overflow-y-auto min-h-full lg:rounded-2xl"
      }
    >
      <Link href="/dashboard/user/home" className={"mt-2"}>
        <img className="w-1/2 h-auto m-auto" src="/logo.png" alt="logo" />
      </Link>
      <nav className="w-full flex-grow flex flex-col justify-start gap-6">
        {navigation.map((item) => {
          if (item.sidebar) {
            const isCurrent = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  isCurrent ? "bg-primary-dark-1" : "hover:bg-primary-dark-8 transition-all duration-500",
                  "flex flex-row justify-start items-center p-3 pb-4 rounded-md gap-4 text-neutral-1"
                )}
              >
                <>
                  {React.createElement(item.icon as FunctionComponent)}
                  <h6 className={"-mb-2"}>{item.name}</h6>
                </>
              </Link>
            );
          }
        })}
      </nav>
      <CopyRight />
    </div>
  );
};

export default Sidebar;
