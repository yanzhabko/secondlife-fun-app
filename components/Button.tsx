"use client";
import { FC } from "react";
import { signOut } from "next-auth/react";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  tag?: "div" | "button" | "a";
  types: "login" | "logout";
  href?: string;
}

const Button: FC<ButtonProps> = ({
  title,
  className,
  onClick,
  tag = "div",
  types,
  href,
}) => {
  const Tag = tag;
  const ButtonContext = () => {
    if (types === "login") {
      return (
        <Tag
          href={href}
          onClick={onClick}
          className={`${className} cursor-pointer w-auto px-5 py-2 lg:px-10 rounded-lg text-white font-semibold bg-purple-400 hover:bg-purple-500`}
        >
          {title}
        </Tag>
      );
    } else if (types === "logout") {
      return (
        <Tag
          onClick={() => signOut()}
          className={`${className} cursor-pointer text-center w-auto px-5 py-2 lg:px-10 rounded-lg text-white font-semibold bg-purple-400 hover:bg-purple-500`}
        >
          {title}
        </Tag>
      );
    }
  };
  return <>{ButtonContext()}</>;
};

export default Button;
