"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Toast = () => {
  const toastState = useSelector((state: RootState) => state.toast);

  return (
    <div className="toast toast-top toast-center">
      {toastState.toasts.map((toast) => {
        return (
          <div key={toast.id} className={"alert bg-accent text-white"}>
            <span>{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
