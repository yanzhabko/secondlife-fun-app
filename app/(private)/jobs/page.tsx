import JobsSection from "@/components/section/JobsSection";
import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Роботи | SecondFun" };
}

const page: FC<pageProps> = () => {
  return (
    <main className="mt-[30px] lg:my-[50px]">
      <JobsSection />
    </main>
  );
};

export default page;
