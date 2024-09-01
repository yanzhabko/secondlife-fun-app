"use server";

import prisma from "@/prisma/index";
import bcrypt from "bcrypt";

export const changePassword = async (
  resetPasswordToken: string,
  password: string
) => {
  const user = await prisma.user.findFirst({
    where: {
      resetPasswordToken,
    },
  });

  if (!user) {
    throw new Error("Такий користувач не знайдений!");
  }

  const resetPasswordTokenExpiry = user.resetPasswordTokenExpiry;

  if (!resetPasswordTokenExpiry) {
    throw new Error("Щось пішло не так!");
  }

  const today = new Date();

  if (today < resetPasswordTokenExpiry) {
    throw new Error("Щось пішло не так!");
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      hashedPassword,
      resetPasswordToken: null,
      resetPasswordTokenExpiry: null,
    },
  });

  return "Пароль змінений успішно!";
};
