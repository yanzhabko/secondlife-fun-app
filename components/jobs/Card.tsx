import { FC } from "react";
import Image from "next/image";
import Title from "../Title";
import image from "@/images/Скупник_риби_1.png";

interface CardProps {
  title: string;
  profit: string;
  level: string;
  time: string;
}

const Card: FC<CardProps> = ({ title, profit, level, time }) => {
  return (
    <div className="rounded-md border-[2px] flex-1 w-1/2 lg:w-1/4 text-center mb-2">
      <Image
        src={image}
        alt=""
        className="bg-center w-full h-[300px] bg-cover bg-no-repeat rounded-t-md"
      />
      <hr className="my-2" />
      <Title type="subtitle" title={title} />
      <hr className="my-2" />
      <div className="flex items-center justify-between gap-[20px] pb-2 px-6">
        <div>
          <Title type="subtitle" title="Прибуток" />
          <Title type="text" title={profit} />
        </div>
        <div>
          <Title type="subtitle" title="К-сть годин" />
          <Title type="text" title={time} />
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
