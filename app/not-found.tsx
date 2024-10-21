import Error from "@/components/not-found/Error";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/AuthOption";

export default async function NotFound() {
  const session = await getServerSession(authOptions);
  return (
    <main className="h-[calc(100vh-200px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-230px)]  flex flex-col justify-center items-center">
      <Error session={session} />
    </main>
  );
}
