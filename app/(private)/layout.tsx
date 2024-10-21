import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/AuthOption";
import NotFound from "../not-found";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return <NotFound />;
  }

  return <>{children}</>;
}
