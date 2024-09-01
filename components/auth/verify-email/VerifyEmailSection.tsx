"use client";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

interface VerifyEmailSectionProps {}

const VerifyEmailSection: FC<VerifyEmailSectionProps> = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Title
      type="title"
      title="Акаунт підтверджено :)"
      className="text-purple-500"
    />
  );
};

export default VerifyEmailSection;
