import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const options = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 4500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const Toast: React.FC = () => {
  return <ToastContainer bodyClassName={"toast-body"} rtl={true}/>;
};

const errorNotify = (toastMessage: string) => {
  toast.error(toastMessage, options);
};

const successNotify = (toastMessage: string) => {
  toast.success(toastMessage, options);
};

export default Toast;
export { errorNotify, successNotify };