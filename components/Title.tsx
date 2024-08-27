import { FC } from "react";

interface TitleProps {
  title: string;
  className?: string;
  type: "title" | "subtitle" | "text";
}

const Title: FC<TitleProps> = ({ title, className, type }) => {
  const Tag = type === "title" ? "h1" : "p";
  const TitleContext = () => {
    if (type === "title") {
      return (
        <Tag className={`${className} font-semibold text-4 text-purple-400`}>
          {title}
        </Tag>
      );
    } else if (type === "subtitle") {
      return <Tag className={`${className} text-3`}>{title}</Tag>;
    } else if (type === "text") {
      return <Tag className={`${className} text-1 `}>{title}</Tag>;
    } else {
      return null;
    }
  };
  return <>{TitleContext()}</>;
};

export default Title;
