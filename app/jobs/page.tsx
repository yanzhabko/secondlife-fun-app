import JobsSection from "@/components/section/JobsSection";
import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Роботи | SecondFun" };
}

const page: FC<pageProps> = () => {
  return (
    <section className="my-[50px]">
      <JobsSection />
    </section>
  );
};

export default page;
