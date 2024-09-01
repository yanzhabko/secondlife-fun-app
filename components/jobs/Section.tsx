import { FC } from "react";
import Title from "../Title";
import Card from "./Card";

interface SectionProps {
  title: string;
  className: string;
  object: { image: string; title: string; profit: string; level: string }[];
}

const Section: FC<SectionProps> = ({ title, className, object }) => {
  return (
    <>
      <Title type="title" title={title} className={className} />
      <div className="flex flex-wrap justify-center gap-3 lg:gap-4 sm:justify-start items-center">
        {object.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            profit={item.profit}
            level={item.level}
          />
        ))}
      </div>
    </>
  );
};

export default Section;
