import { FC } from "react";
import Title from "./Title";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-transparent w-full py-[14px] px-[24px]">
      <div className="bg-white flex flex-row items-center justify-between px-[25px] py-[10px] lg:px-[40px] lg:py-[20px] rounded-3xl shadow-md">
        <div className="container flex flew-wrap flex-col justify-center items-center gap-2">
          <div className="flex flex-wrap items-center justify-center text-center gap-1">
            <Title title="Наш проєкт не пов'язана з" type="subtitle" />
            <Link target="_black" href="https://secondliferp.com.ua/">
              <Title
                type="subtitle"
                title="SecondLifeRP."
                className="text-blue-500"
              />
            </Link>
            <Title
              title="Весь контент і матеріали належать власникам"
              type="subtitle"
            />
            <Link target="_black" href="https://secondliferp.com.ua/">
              <Title
                type="subtitle"
                title="SecondLifeRP."
                className="text-blue-500"
              />
            </Link>
          </div>
          <Link target="_black" href="https:/yanzhabko.vercel.app/">
            <Title
              type="text"
              title="Розробник - yanzhabko"
              className="text-blue-500"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
