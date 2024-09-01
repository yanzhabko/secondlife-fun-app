"use client";
import { FC } from "react";
import Title from "../Title";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profileLink } from "@/lib/utils";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const path = usePathname();

  return (
    <nav className="w-[20%] h-full bg-white rounded-lg py-5 flex flex-col gap-2 items-center">
      <Title type="title" title="Навігація" className="text-purple-500" />
      <div className="flex flex-col gap-2 items-center">
        {profileLink.map((item, index) => (
          <Link
            href={`/profile${item.href}`}
            className={`${path.endsWith(item.href) ? "text-purple-500" : null}`}
            key={index}
          >
            <Title
              type="subtitle"
              title={item.title}
              className="font-semibold"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
