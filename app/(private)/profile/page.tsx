import Navbar from "@/components/profile/Navbar";
import ProfileLaptopSection from "@/components/profile/information/ProfileLaptopSection";
import ProfileMobileSection from "@/components/profile/information/ProfileMobileSection";
import { FC } from "react";

export async function generateMetadata({}) {
  return { title: "Профіль | SecondFun" };
}

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <main className="container flex flex-col lg:flex-row mt-[30px] lg:my-[50px]">
      <Navbar />
      <ProfileLaptopSection />
      <ProfileMobileSection />
    </main>
  );
};

export default page;
