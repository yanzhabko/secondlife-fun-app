"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      containerStyle={{
        top: 80,
      }}
      reverseOrder={false}
    />
  );
};

export default ToastProvider;
