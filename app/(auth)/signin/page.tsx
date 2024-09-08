import SignInForm from "@/components/auth/singin/SignInForm";
import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Авторизація | SecondFun" };
}

const page: FC<pageProps> = () => {
  return (
    <main>
      <SignInForm />
    </main>
  );
};

export default page;
