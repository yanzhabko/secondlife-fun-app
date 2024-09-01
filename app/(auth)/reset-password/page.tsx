import { FC } from "react";
import prisma from "@/prisma/index";
import ResetPasswordForm from "@/components/auth/reset-password/ResetPasswordForm";
import ChangePasswordForm from "@/components/auth/change-password/ChangePasswordForm";

export async function generateMetadata({}) {
  return { title: "Відновлення акаунту | SecondFun" };
}

interface pageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  if (searchParams.token) {
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: searchParams.token as string,
      },
    });
    if (!user) {
      return <div>Користувач не знайдений</div>;
    }

    return (
      <section className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
        <ChangePasswordForm resetPasswordToken={searchParams.token as string} />
      </section>
    );
  } else {
    return (
      <section className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
        <ResetPasswordForm />
      </section>
    );
  }
};

export default page;
