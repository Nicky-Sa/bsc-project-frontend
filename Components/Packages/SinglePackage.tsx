"use client";
import React, { useEffect, useState } from "react";
import { TickCircle } from "iconsax-react";
import "./backgrounds.css";
import Button from "@/Components/UI/Button";
import { reformat, sortById } from "@/utils/functions";
import Modal from "@/Components/Notification/Modal";
import { successNotify } from "@/Components/Notification/Toast";
import { useSelector } from "react-redux";
import { storeType } from "@/store";
import { extractPackageInfo } from "@/Components/Packages/functions";
import { singlePackageType } from "@/Components/Packages/types";

const Package: React.FC<singlePackageType> = ({ features, level }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonState, setButtonState] = useState("active");
  const packageInfo = useSelector((state: storeType) => state.currentUserReducer.packageInfo);
  const [packageName, packageImg] = extractPackageInfo(level);

  useEffect(() => {
    if (packageInfo.currentPackageLevel) {
      if (packageInfo.currentPackageLevel === level) {
        setButtonState("currentPackage");
      } else {
        setButtonState("disabled");
      }
    }
  }, [packageInfo.currentPackageLevel, level]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    successNotify("بسته موردنظر با موفقیت خریداری شد.");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`package${packageImg} bg-contain bg-center bg-no-repeat transition-all duration-300 hover:scale-105`}
    >
      <div className={"flex flex-col gap-10 px-16 pt-56 pb-20"}>
        <h3 className={"text-center text-primary-light-9 drop-shadow-lg brightness-110"}>{packageName}</h3>
        {sortById(features).map((item, i) => (
          <div key={i} className={"flex flex-row gap-2 items-center"}>
            <TickCircle size="28" />
            <p className={"b1 font-bold"}>{item.key}:</p>
            <p className={"b1"}>{reformat(item.value, item.unit)}</p>
          </div>
        ))}

        {buttonState === "active" && (
          <Button variation={"fill"} onClick={showModal}>
            خرید
          </Button>
        )}
        {buttonState === "currentPackage" && (
          <Button variation={"success"} className={"cursor-not-allowed"}>
            بسته فعلی
          </Button>
        )}
        {buttonState === "disabled" && (
          <Button variation={"fill"} disabled={true}>
            غیرقابل خرید
          </Button>
        )}

        <Modal title="تایید خرید" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className={"flex flex-col gap-8"}>
            <p className={"b1"}>آیا از خرید این بسته مطمئن هستید؟</p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Package;
