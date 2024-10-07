"use client";
import { FC } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  title: string | undefined | null;
  className?: string;
  onClick?: (e?: any) => void;
  tag?: "div" | "button" | "a";
  types: "login" | "logout" | "link" | "submenu" | "icon";
  href?: string;
  Icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  title,
  className,
  onClick,
  tag = "div",
  types,
  href,
  Icon,
}) => {
  const Tag = tag;
  const ButtonContext = () => {
    if (types === "login") {
      return (
        <Tag
          href={href}
          onClick={onClick}
          className={`${className} px-4 py-2 cursor-pointer text-center w-auto text-2 lg:text-3 lg:px-5 lg:py-1 xl:px-10 rounded-lg text-white font-semibold bg-purple-400 hover:bg-purple-500`}
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
    } else if (types === "link") {
      return (
        <Link href={href === undefined ? "/" : href}>
          <Tag
            onClick={onClick}
            className={`${className} cursor-pointer text-center text-1  w-auto px-3 py-2 lg:px-5 rounded-lg text-white font-semibold bg-purple-400 hover:bg-purple-500`}
          >
            {title}
          </Tag>
        </Link>
      );
    } else if (types === "submenu") {
      return (
        <Link href={href === undefined ? "/" : href}>
          <Tag
            onClick={onClick}
            className={`${className} cursor-pointer text-center w-auto `}
          >
            {title}
          </Tag>
        </Link>
      );
    } else if (types === "icon") {
      return (
        <Tag
          onClick={onClick}
          className={`${className} cursor-pointer text-center w-auto `}
        >
          {Icon && <Icon className="w-5 h-5 lg:w-6 md:h-6" />}
        </Tag>
      );
    } else {
      return null;
    }
  };
  return <>{ButtonContext()}</>;
};

export default Button;
