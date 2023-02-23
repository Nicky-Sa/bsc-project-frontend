"use client";
import React, { useEffect, useState } from "react";
import { TickCircle } from "iconsax-react";
import "./backgrounds.css";
import Button from "@/Components/UI/Button";
import { reformat } from "@/utils/functions";
import Modal from "@/Components/Notification/Modal";
import { successNotify } from "@/Components/Notification/Toast";
import { useSelector } from "react-redux";
import { storeType } from "@/store";
import { extractPackageInfo } from "@/Components/Domain/Packages/functions";

type propsType = {
  properties: {
    level: string;
    items: {
      key: string;
      value: string | number;
      unit?: string;
    }[];
  };
};

const Package: React.FC<propsType> = ({ properties }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonState, setButtonState] = useState("active");
  const packageInfo = useSelector((state: storeType) => state.currentUserReducer.packageInfo);
  const [packageName, packageImg] = extractPackageInfo(properties.level);

  useEffect(() => {
    if (packageInfo.level) {
      if (packageInfo.level === properties.level) {
        setButtonState("currentPackage");
      } else {
        setButtonState("disabled");
      }
    }
  }, [packageInfo.level, properties.level]);

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
        {properties.items.map((item, i) => (
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
        {buttonState === "currentPackage" && <Button variation={"success"} className={"cursor-not-allowed"}>بسته فعلی</Button>}
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
