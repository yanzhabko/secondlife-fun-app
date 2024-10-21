"use client";

import { FC } from "react";
import Button from "../Button";
import { navLinks } from "@/lib";
import { usePathname } from "next/navigation";

interface NavBarProps {
  id: string;
}

const NavBar: FC<NavBarProps> = ({ id }) => {
  const pathname = usePathname();
  const defaultLink = navLinks
    .filter((item) => item.title === id)
    .map((item) => item.href);
  const links = navLinks
    .filter((item) => item.title === id)
    .flatMap((item) => item.subLinks || []);
  return (
    <div className="w-full flex gap-3">
      {links.map((link, index) => (
        <Button
          types="submenu"
          href={`${defaultLink}${link.href}`}
          key={index}
          title={link.title}
          className={`px-4 py-3 cursor-pointer text-center w-auto text-2 lg:text-3 lg:px-5 lg:py-1 xl:px-10 rounded-lg text-white font-semibold bg-purple-400 hover:bg-purple-500 ${
            pathname === `${defaultLink}${link.href}` ? "bg-purple-500" : null
          }`}
        />
      ))}
    </div>
  );
};

export default NavBar;
