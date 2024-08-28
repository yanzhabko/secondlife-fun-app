import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Автосалони | SecondFun" };
}

const page: FC<pageProps> = () => {
  return <div></div>;
};

export default page;
