import { FC } from "react";
import prisma from "@/prisma/index";
import VerifyEmailSection from "@/components/auth/verify-email/VerifyEmailSection";

export async function generateMetadata({}) {
  return { title: "Профіль | SecondFun" };
}

interface pageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  if (searchParams.token) {
    const user = await prisma.user.findUnique({
      where: {
        emailVerificationToken: searchParams.token as string,
      },
    });
    if (!user) {
      return <div>Користувач не знайдений</div>;
    }

    await prisma.user.update({
      where: {
        emailVerificationToken: searchParams.token as string,
      },
      data: {
        emailVerified: true,
        emailVerificationToken: null,
      },
    });
    return (
      <section className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
        <VerifyEmailSection />
      </section>
    );
  } else {
    return null;
  }
};

export default page;
