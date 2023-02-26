"use client";
import React from "react";
import LoadingSpinner from "@/Components/UI/LoadingSpinner";

const Loading: React.FC = () => {
  return (
    <div className={"absolute flex flex-col gap-4 items-center top-[40%] right-[60%]"}>
      <h5>درحال بارگذاری...</h5>
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
