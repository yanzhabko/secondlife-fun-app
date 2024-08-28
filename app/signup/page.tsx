import Form from "@/components/singup/Form";
import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Регістрація | SecondFun" };
}

const page: FC<pageProps> = () => {
  return (
    <section className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
      <Form />
    </section>
  );
};

export default page;
