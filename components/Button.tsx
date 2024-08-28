"use client";
import { FC } from "react";
import { signOut } from "next-auth/react";

interface ButtonProps {
  title: string | undefined | null;
  className?: string;
  onClick?: (e?: any) => void;
  tag?: "div" | "button" | "a";
  types: "login" | "logout" | "header" | "submenu";
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
          className={`${className} cursor-pointer text-center w-auto px-5 py-2 lg:px-10 rounded-lg text-white font-semibold bg-purple-400 hover:bg-purple-500`}
        >
          {title}
        </Tag>
      );
    } else if (types === "logout") {
      return (
        <Tag
          onClick={() => signOut()}
          className={`${className} cursor-pointer text-center w-auto`}
        >
          {title}
        </Tag>
      );
    } else if (types === "header") {
      return (
        <Tag
          href={href}
          onClick={onClick}
          className={`${className} cursor-pointer text-center text-1  w-auto px-3 py-2 lg:px-5 rounded-lg text-white font-semibold bg-purple-400 hover:bg-purple-500`}
        >
          {title}
        </Tag>
      );
    } else if (types === "submenu") {
      return (
        <Tag
          href={href}
          onClick={onClick}
          className={`${className} cursor-pointer text-center w-auto `}
        >
          {title}
        </Tag>
      );
    } else {
      return null;
    }
  };
  return <>{ButtonContext()}</>;
};

export default Button;
