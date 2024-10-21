"use client";
import Image from "next/image";
import { FC } from "react";
import Title from "../Title";
import { useSession } from "next-auth/react";

interface InformationProps {}

const Information: FC<InformationProps> = () => {
  const session = useSession();
  const user = session.data?.user;
  const date = session.data?.expires;
  console.log(session);
  return (
    <div className="w-full flex gap-2 flex-col items-center justify-center">
      <Image
        src=""
        alt=""
        className="w-[200px] h-[200px] bg-slate-700 rounded-full"
      />
      <Title title={user?.name} type="title" />
      <div className="flex">
        <Title title={user?.name} type="title" />
        <Title title={user?.name} type="title" />
      </div>
    </div>
  );
};

export default Information;
