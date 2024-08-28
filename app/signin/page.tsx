import Form from "@/components/singin/Form";
import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Авторизація | SecondFun" };
}

const page: FC<pageProps> = () => {
  return (
    <section className="h-[calc(100vh-230px)] flex flex-col justify-center items-center">
      <Form />
    </section>
  );
};

export default page;
