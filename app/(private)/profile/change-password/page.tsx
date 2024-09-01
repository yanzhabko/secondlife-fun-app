import Navbar from "@/components/profile/Navbar";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <section className="container mt-[30px] lg:my-[50px]">
      <Navbar />
    </section>
  );
};

export default page;
