"use client";
import React from "react";
import Link from "next/link";
import { classNames } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { Home2, Map1, MessageQuestion, Moneys } from "iconsax-react";
import CopyRight from "@/Components/UI/CopyRight";

const dashboardNavigation = [
  { name: "خانه", href: "/dashboard", icon: Home2 },
  { name: "تاریخچه‌ی موقعیت‌ها", href: "/dashboard/history", icon: Map1 },
  { name: "امور مالی", href: "/dashboard/finance", icon: Moneys },
  { name: "سوالات متداول", href: "/dashboard/faq", icon: MessageQuestion },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="py-6 px-1 md:px-4 flex flex-col gap-12 min-h-full w-[13%] lg:w-[18%] z-10 bg-primary-dark-5 rounded-2xl items-center justify-between py-6 overflow-y-auto ">
      <Link href="/" className={"mt-2 hidden lg:block"}>
        <img className="w-40 h-auto" src="/logo.png" alt="" />
      </Link>
      <nav className="w-full flex-grow flex flex-col justify-start gap-6">
        {dashboardNavigation.map((item) => {
          const isCurrent = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                isCurrent ? "bg-primary-dark-1" : "hover:bg-primary-dark-8 transition-all duration-500",
                "flex flex-row justify-start items-center p-3 pb-4 rounded-md gap-4"
              )}
            >
              {React.createElement(item.icon)}
              <p className={"h6 -mb-2"}>{item.name}</p>
            </Link>
          );
        })}
      </nav>
      <CopyRight />
    </aside>
  );
};

export default Sidebar;
