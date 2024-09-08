"use server";

import prisma from "@/prisma/index";

export const updateUser = async (
  email: string,
  discord: string,
  phoneNumber: string,
  cardNumber: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      contacts: true,
    },
  });

  if (!user) {
    throw new Error("User not found!");
  }

  if (user.contacts) {
    await prisma.contacts.update({
      where: {
        userId: user.id,
      },
      data: {
        discord,
        phoneNumber,
        cardNumber,
      },
    });
  } else {
    await prisma.contacts.create({
      data: {
        discord,
        phoneNumber,
        cardNumber,
        userId: user.id,
      },
    });
  }

  return "Дані успішно оновлені";
};
