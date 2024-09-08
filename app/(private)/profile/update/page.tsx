import { FC } from "react";
import Navbar from "@/components/profile/Navbar";
import UpdateSection from "@/components/profile/update/UpdateSection";

export async function generateMetadata({}) {
  return { title: "Профіль | SecondFun" };
}

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <main className="container flex flex-col lg:flex-row mt-[30px] lg:my-[50px]">
      <Navbar />
      <UpdateSection />
    </main>
  );
};

export default page;
