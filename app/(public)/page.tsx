import { FC } from "react";

export async function generateMetadata({}) {
  return { title: "Головна | SecondFun" };
}

interface pageProps {}

const page: FC<pageProps> = async () => {
  return <section></section>;
};

export default page;
