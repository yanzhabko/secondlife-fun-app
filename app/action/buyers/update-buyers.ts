"use server";

import prisma from "@/prisma/index";

export const updateBuyers = async (
  categoryName: string,
  newPrices: number[]
) => {
  const categories = await prisma.category.findUnique({
    where: { type: categoryName },
    include: { buyers: true },
  });

  if (!categories || !categories.buyers || categories.buyers.length === 0) {
    throw new Error("Щось пішло не так!");
  }

  const calculatePercentage = (
    newPrice: number,
    maximum: number,
    minimum: number
  ): number => {
    return Math.round(((minimum - newPrice) / (minimum - maximum)) * 100);
  };

  const updateBuyersPromises = categories.buyers.map((item, index) => {
    const newPrice = newPrices[index];
    const percentage = calculatePercentage(
      newPrice,
      item.maximum,
      item.minimum
    );

    return prisma.buyers.update({
      where: { id: item.id },
      data: {
        priceNow: newPrice,
        percentage: percentage,
      },
    });
  });

  const updateCategoryPromise = prisma.category.update({
    where: { type: categoryName },
    data: {
      latestUpdate: new Date(),
    },
  });

  await Promise.all([...updateBuyersPromises, updateCategoryPromise]);

  return "Дані оновлені!";
};
