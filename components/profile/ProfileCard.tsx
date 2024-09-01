"use client";
import { FC } from "react";
import { useSession } from "next-auth/react";

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = () => {
  const session = useSession();
  console.log(session);
  return <div></div>;
};

export default ProfileCard;
