"use client";
import { FC } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Title from "@/components/Title";
import ProfileTitle from "./ProfileTitle";
import profile from "@/images/profile.jpg";

interface ProfileMobileSectionProps {}

const ProfileMobileSection: FC<ProfileMobileSectionProps> = () => {
  const { data: session } = useSession();
  return (
    <section className="flex lg:hidden flex-1 items-center gap-5 flex-col mt-[30px]">
      <div className="flex flex-col w-full items-center gap-3">
        <Image
          src={profile}
          alt=""
          width={200}
          height={200}
          className="w-[150px] h-[150px] rounded-full overflow-hidden"
        />
        <ProfileTitle title="Імя та Прізвище" text={session?.user.name} />
      </div>
      <Title
        type="subtitle"
        title="Інформація про користувача"
        className="text-slate-400"
      />
      <div className="flex w-full justify-center gap-4 flex-wrap items-center">
        <ProfileTitle title="Номер телефону" text={session?.user.phoneNumber} />
        <ProfileTitle title="Discord" text={session?.user.discord} />
        <ProfileTitle title="Номер карти" text={session?.user.cardNumber} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Title
          type="title"
          title="Історія продажу"
          className="text-purple-400"
        />
        <Title type="subtitle" title="В майбутньому..." />
      </div>
    </section>
  );
};

export default ProfileMobileSection;
