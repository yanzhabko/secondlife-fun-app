"use client";
import { FC } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Title from "@/components/Title";
import ProfileTitle from "./ProfileTitle";
import { formatDate } from "@/lib/formatDate";
import profile from "@/images/profile.jpg";

interface ProfileLaptopSectionProps {}

const ProfileLaptopSection: FC<ProfileLaptopSectionProps> = () => {
  const { data: session } = useSession();

  const registrationDate = formatDate(session?.user.createdAt);

  return (
    <section className="hidden lg:flex flex-1 flex-col items-center gap-[40px] ml-[60px]">
      <div className="flex  w-full justify-center lg:justify-around items-center">
        <ProfileTitle title="Імя та Прізвище" text={session?.user.name} />
        <div className="w-[150px] h-[150px] lg:h-[200px] lg:w-[200px] rounded-full overflow-hidden">
          <Image
            src={profile}
            alt=""
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <ProfileTitle title="Дата регістрації" text={registrationDate} />
      </div>
      <Title
        type="subtitle"
        title="Інформація про користувача"
        className="text-slate-400"
      />
      <div className="w-full flex justify-center items-center gap-[30px]">
        <ProfileTitle title="Номер телефону" text={session?.user.phoneNumber} />
        <ProfileTitle title="Discord" text={session?.user.discord} />
        <ProfileTitle title="Номер карти" text={session?.user.cardNumber} />
      </div>
      <div className="flex flex-col items-center">
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

export default ProfileLaptopSection;
