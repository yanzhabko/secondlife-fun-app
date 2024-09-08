"use client";
import { FC, useEffect, useState } from "react";
import Title from "../Title";
import Button from "../Button";

interface ErrorProps {
  session: any;
}

const Error: FC<ErrorProps> = ({ session }) => {
  const [info, setInfo] = useState({
    link: "",
    title: "",
  });
  useEffect(() => {
    if (!session || !session.user.email) {
      setInfo({ link: "/signin", title: "Увійти в аккаунт" });
    } else {
      setInfo({ link: document.referrer || "/", title: "Повернутись назад" });
    }
  }, [session]);
  return (
    <section className="flex flex-col items-center gap-2">
      <Title
        type="title"
        title="Not found – 404 ;("
        className="text-purple-400"
      />
      <div>
        <Button types="link" href={info.link} title={info.title} />
      </div>
    </section>
  );
};

export default Error;
