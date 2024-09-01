import { FC } from "react";
import Image from "next/image";
import Title from "../Title";
import image from "@/images/Скупник_риби_1.png";

interface CardProps {
  title: string;
  profit: string;
  level: string;
}

const Card: FC<CardProps> = ({ title, profit, level }) => {
  return (
    <div className="sm:w-[calc(50%-8px)] md:w-[calc(33.33%-8px)] lg:w-[calc(25%-15px)] items-center rounded-md border-[0.5px] border-gray-400 text-center transition-all duration-200 scale-100 hover:scale-102">
      <Image
        src={image}
        alt=""
        className="bg-center w-full h-[300px] bg-cover bg-no-repeat rounded-t-md"
      />

      <Title type="subtitle" title={title} className="my-2" />
      <div className="mt-2 bg-gray-400 w-[90%] h-[1px] mx-auto" />
      <div className="flex items-center justify-between gap-[20px] py-4 px-6">
        <div>
          <Title type="subtitle" title="Прибуток" />
          <Title type="text" title={profit} />
        </div>
        <div>
          <Title type="subtitle" title="Рівень" />
          <Title type="text" title={level} />
        </div>
      </div>
    </div>
  );
};

export default Card;
