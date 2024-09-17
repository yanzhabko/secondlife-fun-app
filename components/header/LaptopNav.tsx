"use client";
import { FC } from "react";
import Button from "../Button";
import { navLinks } from "@/lib/index";
import Link from "next/link";
import Title from "../Title";
import { usePathname } from "next/navigation";

interface LaptopNavProps {
  onClose: () => void;
  onOpen: () => void;
  isActive: boolean;
  session: any;
}

const LaptopNav: FC<LaptopNavProps> = ({
  onClose,
  onOpen,
  isActive,
  session,
}) => {
  const pathname = usePathname();
  return (
    <>
      {session?.status === "authenticated" ? (
        <>
          <nav className="hidden gap-8 lg:flex z-10">
            {navLinks.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href === "/" ? "/" : ""}
                  className={`${
                    pathname === item.href ||
                    (pathname.startsWith(item.href) && item.href !== "/")
                      ? "relative before:absolute before:w-full before:h-0.5 before:top-full before:bg-purple-500"
                      : ""
                  } transition-all duration-200 hover:text-purple-500 relative hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:top-full hover:before:bg-purple-500`}
                  onClick={onClose}
                >
                  <Title title={item.title} type="subtitle" />
                </Link>

                {item.subLinks.length !== 0 && (
                  <div className="absolute rounded-b-lg flex-col gap-2 py-2 px-4 items-center left-0 hidden top-[120%] bg-white text-black group-hover:flex shadow-lg group-hover:before:w-full group-hover:before:h-2 group-hover:before:-top-2 group-hover:before:block group-hover:before:absolute group-hover:before:left-0 group-hover:before:bg-transparent">
                    {item.subLinks.map((subItem, subIndex) => (
                      <Link
                        href={`${item.href}${subItem.href}`}
                        key={subIndex}
                        className="block transition-all duration-200 hover:text-purple-500"
                        onClick={onClose}
                      >
                        <Title title={subItem.title} type="subtitle" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="relative hidden lg:flex">
            <Button
              types="login"
              tag="div"
              title={session.data.user?.name}
              onClick={onOpen}
              className="z-10"
            />
            <nav
              className={`${
                isActive ? "block" : "hidden"
              } absolute rounded-md top-[110%] left-0 w-full bg-purple-400 flex flex-col z-10`}
            >
              <Button
                types="submenu"
                title="Профіль"
                href="/profile"
                className="text-white px-3 py-2 rounded-md font-medium bg-purple-400 active:bg-purple-300 hover:bg-purple-300"
                onClick={onClose}
              />
              <Button
                types="logout"
                title="Вийти"
                className="text-white px-3 py-2 font-medium rounded-md bg-purple-400 active:text-red-500 hover:text-red-500 active:bg-purple-300 hover:bg-purple-300"
                onClick={onClose}
              />
            </nav>
          </div>
          <div
            className={`${
              isActive ? "block" : "hidden"
            } absolute top-0 left-0 w-[100vw] h-[100vh] bg-transparent`}
            onClick={onClose}
          ></div>
        </>
      ) : (
        <>
          <div className="gap-4 hidden lg:flex">
            <Button types="link" title="Увійти" href="/signin" />
            <Button types="link" title="Регістрація" href="/signup" />
          </div>
        </>
      )}
    </>
  );
};

export default LaptopNav;
