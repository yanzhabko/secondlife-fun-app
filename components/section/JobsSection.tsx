import Card from "@/components/jobs/Card";
import Title from "@/components/Title";
import { FC } from "react";

interface JobsSectionProps {}

const JobsSection: FC<JobsSectionProps> = () => {
  return (
    <div className="container flex flex-col gap-3">
      <Title type="title" title="Легальні роботи" className="text-green-500" />
      <div className="flex flex-wrap justify-between gap-4">
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
        <Card title="Рибак" profit="100к/час" level="3" time="100" />
      </div>
    </div>
  );
};

export default JobsSection;
