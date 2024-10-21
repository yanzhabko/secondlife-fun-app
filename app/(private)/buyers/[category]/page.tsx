import { FC } from "react";
import NotFound from "@/app/not-found";
import BuyersSection from "@/components/buyers/BuyersSection";
export async function generateMetadata({}) {
  return { title: "Скупники | SecondFun" };
}

interface pageProps {
  params: { category: string };
}

const validCategory = ["fish", "vegetables", "other"];

const page: FC<pageProps> = ({ params }) => {
  if (!validCategory.includes(params.category)) {
    return <NotFound />;
  }

  return (
    <main className="mt-[30px] lg:my-[50px]">
      <BuyersSection />
    </main>
  );
};

export default page;
