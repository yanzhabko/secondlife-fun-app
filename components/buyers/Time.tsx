import { FC } from "react";
import Title from "../Title";

interface TimeProps {
  lastTime: string;
}

const Time: FC<TimeProps> = ({ lastTime }) => {
  return (
    <div className="bg-purple-400 rounded-lg p-4">
      <Title
        title={`Останнє оновлення цін: ${lastTime}`}
        type="subtitle"
        className="text-white"
      />
    </div>
  );
};

export default Time;
