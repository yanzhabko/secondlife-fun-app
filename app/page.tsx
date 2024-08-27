import { FC } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOption";
import Link from "next/link";
import Button from "@/components/Button";

interface pageProps {}

const page: FC<pageProps> = async () => {
  const session = await getServerSession(authOptions);
  return (
    <section>
      {!session ? (
        <Button title="Увійти" types="login" tag="a" href="/signin" />
      ) : (
        <>
          <h1>{session?.user?.name}</h1>
          <Button title="Вийти" types="logout" />
        </>
      )}
    </section>
  );
};

export default page;
