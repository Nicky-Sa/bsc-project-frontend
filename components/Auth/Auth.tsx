import React from "react";
import authBg from "@/components/Auth/assets/bg.png"
import logo from "@/public/logo.png"
import AuthTab from "@/components/Auth/AuthTab";

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

const Auth: React.FC = () => {
  return (
    <div className = {"relative w-full h-full py-24 2xl:py-12"}>
      <img src = {authBg.src} alt = {"bg"} className = {"w-[70%] h-auto m-auto"}/>
      <div className = {"w-1/4 m-auto absolute right-[22%] top-16 flex flex-col gap-8 justify-between items-center"}>
        <img src = {logo.src} className = {"w-36 h-auto"}/>
        <AuthTab/>
      </div>
    </div>

  );
};

export default Auth;
