import React from "react";
import authBg from "@/components/Auth/assets/bg.png";
import logo from "@/public/logo.png";
import Tab from "@/components/Auth/Tab";
import LoginForm from "@/components/Auth/LoginForm";

const tabItems = [
  {
    label: "ورود",
    children: <LoginForm />,
  },
  {
    label: "ثبت‌نام",
    children: `Content of Tab Pane 2`,
  },
];

const Auth: React.FC = () => {
  return (
    <div className={"relative w-full h-full py-24 2xl:py-12"}>
      <img src={authBg.src} alt={"bg"} className={"w-[70%] h-auto m-auto"} />
      <div className={"w-[20%] m-auto absolute right-[23%] top-16 flex flex-col gap-12 justify-between items-center"}>
        <img src={logo.src} className={"w-36 h-auto"} alt={"logo"} />
        <Tab tabItems={tabItems} />
      </div>
    </div>
  );
};

export default Auth;
