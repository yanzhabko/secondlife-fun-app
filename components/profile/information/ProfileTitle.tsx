import { FC } from "react";
import Title from "@/components/Title";

interface ProfileTitleProps {
  title: string;
  text: string;
}

const ProfileTitle: FC<ProfileTitleProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <Title type="subtitle" title={title} />
      <Title type="title" tag="p" title={text} className="lg:text-3" />
    </div>
  );
};

export default ProfileTitle;
