"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      containerStyle={{
        top: 120,
      }}
      reverseOrder={false}
    />
  );
};

export default ToastProvider;
