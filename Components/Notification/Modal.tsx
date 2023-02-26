import React from "react";

import { Add } from "iconsax-react";
import { childrenType } from "@/global/types";
import { Modal as AntModal } from "antd";
import Button from "@/Components/UI/Button";

type propsType = {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  title: string;
};

const Modal: React.FC<propsType & childrenType> = ({ open, onOk, onCancel, title, children }) => {
  return (
    <AntModal
      closeIcon={<Add size="32" color={"#000"} className={"rotate-45"} />}
      title={title}
      open={open}
      footer={null}
      centered
    >
      <div className={"flex flex-col gap-8"}>
        {children}
        <div className={"flex flex-row items-center justify-end gap-2 w-2/3 mr-auto"}>
          <Button variation={"fill"} onClick={onOk} className={"basis-1/2"}>
            خرید
          </Button>
          <Button
            variation={"text"}
            onClick={onCancel}
            className={"text-primary-dark-1 basis-1/3"}
          >
            انصراف
          </Button>
        </div>
      </div>
    </AntModal>
  );
};

export default Modal;
