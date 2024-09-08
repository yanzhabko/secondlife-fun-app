import { FC } from "react";
import prisma from "@/prisma/index";
import ResetPasswordForm from "@/components/auth/reset-password/ResetPasswordForm";
import ChangePasswordForm from "@/components/auth/change-password/ChangePasswordForm";

export async function generateMetadata({}) {
  return { title: "Забув пароль | SecondFun" };
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
      <main>
        <ChangePasswordForm resetPasswordToken={searchParams.token as string} />
      </main>
    );
  } else {
    return (
      <main>
        <ResetPasswordForm />
      </main>
    );
  }
};

export default page;
