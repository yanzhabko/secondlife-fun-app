"use client";
import Title from "./Title";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Burger from "./header/Burger";
import LaptopNav from "./header/LaptopNav";

const Header = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const [isProfile, setProfile] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickOpen = () => {
    setProfile(!isProfile);
  };

  const handleClickClose = () => {
    setProfile(false);
  };

  return (
    <header className="bg-transparent w-full py-[14px] px-[24px]">
      <div className="bg-white flex flex-row items-center justify-between px-[25px] py-[10px] lg:px-[40px] lg:py-[20px] rounded-3xl shadow-md">
        <Link href="/" className="flex z-10" onClick={handleClickClose}>
          <Title title="Second" type="title" className="!text-blue-500" />
          <Title title="Fun" type="title" className="!text-yellow-500" />
        </Link>
        <LaptopNav
          isActive={isProfile}
          onOpen={handleClickOpen}
          onClose={handleClickClose}
          session={session}
        />
        <Burger onClick={handleOpen} open={open} />
      </div>
    </header>
  );
};

export default Header;
