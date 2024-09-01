import { FC } from "react";
import Button from "../Button";
import { navLinks } from "@/lib/utils";
import Link from "next/link";
import Title from "../Title";

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
  return (
    <>
      {session?.status === "authenticated" ? (
        <>
          <nav className="hidden gap-8 lg:flex z-10">
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="transition-all duration-200 hover:text-purple-500 relative hover:before:absolute hover:before:w-full hover:before:h-0.5 hover:before:top-full hover:before:bg-purple-500"
                onClick={onClose}
              >
                <Title title={item.title} type="subtitle" />
              </Link>
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
                tag="a"
                href="/profile/personal-information"
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
            <Button types="header" tag="a" title="Увійти" href="/signin" />
            <Button types="header" tag="a" title="Регістрація" href="/signup" />
          </div>
        </>
      )}
    </>
  );
};

export default LaptopNav;
