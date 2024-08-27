import { authOptions } from "@/lib/AuthOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface ProtectedRootLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedRootLayout({
  children,
}: ProtectedRootLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/singin");
  }

  return <main>{children}</main>;
}
