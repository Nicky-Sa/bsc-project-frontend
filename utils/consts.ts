// export const baseRoute = process.env.NODE_ENV === "production" ? "/backend" : "http://localhost:5002";
import { DeviceMessage, Home2, Map1, MessageQuestion, Moneys } from "iconsax-react";

export const baseRoute = "http://localhost:5002";

export const toastRedirectTimeout = 4500;

export const navigation = [
  { name: "خانه", href: "/dashboard/user", icon: Home2, sidebar: true },
  { name: "تاریخچه‌ی موقعیت‌ها", href: "/dashboard/user/history", icon: Map1, sidebar: true },
  { name: "امور مالی", href: "/dashboard/user/finance", icon: Moneys, sidebar: true },
  { name: "پیام‌های تگ‌ها", href: "/dashboard/user/tagzMessages", icon: DeviceMessage, sidebar: true },
  { name: "سوالات متداول", href: "/dashboard/faq", icon: MessageQuestion, sidebar: true },
  { name: "پروفایل کاربری", href: "/dashboard/user/profile", icon: null, sidebar: false },
  { name: "پکیج‌ها", href: "/dashboard/packages", icon: null, sidebar: false },
];
