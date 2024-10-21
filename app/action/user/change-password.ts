"use server";

import prisma from "@/prisma/index";
import bcrypt from "bcrypt";

export const changePassword = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error("Такий користувач не знайдений!");
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      hashedPassword,
    },
  });

  return "Пароль успішно змінений!";
};
