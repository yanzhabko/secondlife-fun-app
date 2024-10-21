import Card from "@/components/jobs/Card";
import Title from "@/components/Title";
import { FC } from "react";
import Section from "../jobs/Section";

interface JobsSectionProps {}

const cardData = {
  legal: [
    { image: "", title: "Будівельник", profit: "70к/час", level: "1" },
    { image: "", title: "Електрик", profit: "70к/час", level: "1" },
    { image: "", title: "Поштар", profit: "100к/час", level: "2" },
    { image: "", title: "Ремонтник доріг", profit: "100к/час", level: "3" },
    { image: "", title: "Дальнобольщик", profit: "100к/час", level: "4" },
    { image: "", title: "Інкасатор", profit: "100к/час", level: "4" },
    { image: "", title: "Мусоровоз", profit: "100к/час", level: "5" },
    { image: "", title: "Рибак", profit: "100к/час", level: "3" },
    { image: "", title: "Рибак", profit: "100к/час", level: "3" },
    { image: "", title: "Рибак", profit: "100к/час", level: "3" },
    { image: "", title: "Рибак", profit: "150к/час", level: "3" },
  ],
  noLegal: [
    { image: "", title: "SOTW", profit: "100к/час", level: "1" },
    {
      image: "",
      title: "Автовикрадач",
      profit: "150к/час",
      level: "3",
    },
    { image: "", title: "Збор травки", profit: "150к/час", level: "3" },
  ],
};

const JobsSection: FC<JobsSectionProps> = () => {
  return (
    <div className="container flex flex-col gap-5">
      <Section
        title="Легальні роботи"
        className="text-green-500"
        object={cardData.legal}
      />
      <Section
        title="Нелегальні роботи"
        className="text-red-500"
        object={cardData.noLegal}
      />
    </div>
  );
};

export default JobsSection;
