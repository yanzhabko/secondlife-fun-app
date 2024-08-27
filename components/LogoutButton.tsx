"use client";
import { FC } from "react";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = () => {
  return (
    <div
      className="text-center py-3 rounded-full text-white bg-neutral-900 cursor-pointer"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </div>
  );
};

export default LogoutButton;
