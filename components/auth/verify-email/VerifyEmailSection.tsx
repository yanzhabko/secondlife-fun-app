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
    <section className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
      <Title
        type="title"
        title="Акаунт підтверджено :)"
        className="text-purple-500"
      />
    </section>
  );
};

export default VerifyEmailSection;
