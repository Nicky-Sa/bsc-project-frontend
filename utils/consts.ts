// export const baseRoute = process.env.NODE_ENV === "production" ? "/backend" : "http://localhost:5002";
import { Home2, Map1, MessageQuestion, Moneys } from "iconsax-react";

export const baseRoute = "http://localhost:5002";

export const toastRedirectTimeout = 4500

export const dashboardNavigation = [
  { name: "خانه", href: "/dashboard", icon: Home2 },
  { name: "تاریخچه‌ی موقعیت‌ها", href: "/dashboard/history", icon: Map1 },
  { name: "امور مالی", href: "/dashboard/finance", icon: Moneys },
  { name: "سوالات متداول", href: "/dashboard/faq", icon: MessageQuestion },
];