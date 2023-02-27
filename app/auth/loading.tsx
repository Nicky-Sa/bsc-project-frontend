"use client";
import React from "react";
import LoadingSpinner from "@/Components/UI/LoadingSpinner";

const Loading: React.FC = () => {
  return (
    <div className={"h-screen w-full absolute z-10 bg-gradient-to-r from-primary-dark-10 to-primary-dark-2 flex flex-col gap-4 items-center justify-center top-0 right-0"}>
      <h5>درحال بارگذاری...</h5>
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
