"use client";
import React from "react";
import { Collapse } from "antd";
import { ArrowDown2 } from "iconsax-react";
import { classNames } from "@/utils/functions";

const { Panel } = Collapse;

const faq = [
  {
    question: "چطور باید حسابم را شارژ کنم؟",
    answer: "شما برای شارژ کردن حساب و مشاهده موقعیت تگ‌ها باید از قسمت پکیج، اقدام به خرید بسته جدید نمایید.",
  },
  {
    question: "چگونه می‌توانم پیامک‌های اطلاع‌رسانی را دریافت نمایم؟",
    answer: "با مراجعه به قسمت پروفایل کاربری، درصورتی که پکیج فعلی شما طلایی باشد، می‌توانید شماره همراه خود را ثبت نمونده و پیامک دریافت نمایید.",
  },
  {
    question: "موقعیت خودم را در نقشه به درستی نمی‌بینم. دلیل چیست؟",
    answer:
      "بدلیل تحریم‌های اینترنتی گاهی دریافت موقعیت خود شما روی پنل با مشکل مواجه می‌شود اما این امر تاثیری روی ارسال موقعیت تگ‌ها ندارد.",
  },
  {
    question: "برای تعمیر تگ‌ها باید به کجا مراجعه کنم؟",
    answer: "شما می‌توانید با شماره پشتیبانی تماس بگیرید.",
  },
];

const Faq: React.FC = () => {
  return (
    <Collapse
      className={"text-neutral-1 flex flex-col gap-8"}
      bordered={false}
      defaultActiveKey={["0"]}
      expandIcon={({ isActive }) => (
        <ArrowDown2
          color={"#E5E5E5"}
          className={classNames(isActive ? "rotate-180" : "", "transition-all duration-500")}
        />
      )}
      expandIconPosition={"end"}
    >
      {faq.map((item, i) => (
        <Panel header={item.question} key={i}>
          <p className={"b2"}>{item.answer}</p>
        </Panel>
      ))}
    </Collapse>
  );
};

export default Faq;
