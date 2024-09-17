import { FC } from "react";
import Title from "../Title";

interface UpdateInformationProps {
  lastTime: string;
  newTime: string;
}

const UpdateInformation: FC<UpdateInformationProps> = ({
  lastTime,
  newTime,
}) => {
  return (
    <div className="bg-purple-400 rounded-lg p-4">
      <Title
        title={`Останнє оновлення цін: ${lastTime}`}
        type="subtitle"
        className="text-white"
      />
      <Title
        title={`Наступне оновлення цін: ${newTime}`}
        type="subtitle"
        className="text-white"
      />
    </div>
  );
};

export default UpdateInformation;
