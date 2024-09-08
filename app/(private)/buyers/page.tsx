import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Скупники | SecondFun" };
}

const page: FC<pageProps> = () => {
  return <main></main>;
};

export default page;
