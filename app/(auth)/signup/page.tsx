import SignUpForm from "@/components/auth/singup/SignUpForm";
import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Регістрація | SecondFun" };
}

const page: FC<pageProps> = () => {
  return (
    <main>
      <SignUpForm />
    </main>
  );
};

export default page;
