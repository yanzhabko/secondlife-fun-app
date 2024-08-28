import { FC } from "react";

interface pageProps {}

export async function generateMetadata({}) {
  return { title: "Профіль | SecondFun" };
}

const page: FC<pageProps> = () => {
  return <section></section>;
};

export default page;
