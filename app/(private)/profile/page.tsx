import Navbar from "@/components/profile/Navbar";
import ProfileCard from "@/components/profile/ProfileCard";
import { FC } from "react";

export async function generateMetadata({}) {
  return { title: "Профіль | SecondFun" };
}

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <section className="container mt-[30px] lg:my-[50px]">
      <Navbar />
      <ProfileCard />
    </section>
  );
};

export default page;
