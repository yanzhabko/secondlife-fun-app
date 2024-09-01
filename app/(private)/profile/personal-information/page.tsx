import Navbar from "@/components/profile/Navbar";
import Information from "@/components/section/Information";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <section className="container flex flex-row mt-[30px] lg:my-[50px]">
      <Navbar />
      <Information />
    </section>
  );
};

export default page;
