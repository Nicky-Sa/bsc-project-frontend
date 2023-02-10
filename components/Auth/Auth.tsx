import React from "react";
import authBg from "@/components/Auth/assets/bg.png";
import logo from "@/public/logo.png";
import Tab from "@/components/Auth/Tab";
import LoginForm from "@/components/Auth/LoginForm";
import SignUpForm from "@/components/Auth/SignupForm";

const tabItems = [
  {
    label: "ورود",
    children: <LoginForm />,
  },
  {
    label: "ثبت‌نام",
    children: <SignUpForm />,
  },
];

const Auth: React.FC = () => {
  return (
    <div className={"relative w-full h-full py-24 2xl:py-12"}>
      <img src={authBg.src} alt={"bg"} className={"hidden xl:block px-8 w-full 2xl:w-[73%] h-auto m-auto"} />
      <div
        className={"xl:absolute w-full md:w-1/3 xl:w-[25%] 2xl:w-[19%] m-auto right-[14%] 2xl:right-[23.5%] top-[13%] 2xl:top-[8%] flex flex-col gap-8 justify-between items-center"}
      >
        <img src={logo.src} className={"w-32 h-auto"} alt={"logo"} />
        <Tab tabItems={tabItems} />
      </div>
    </div>
  );
};

export default Auth;
