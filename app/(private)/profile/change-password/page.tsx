import Navbar from "@/components/profile/Navbar";

import { FC } from "react";

export async function generateMetadata({}) {
  return { title: "Профіль - змінити пароль | SecondFun" };
}

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <section className="container mt-[30px] lg:my-[50px]">
      <Navbar />
    </section>
  );
};

export default page;
