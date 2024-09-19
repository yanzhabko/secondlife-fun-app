"use server";

import prisma from "@/prisma/index";

export const updateBuyers = async (categoryName: string, newPrices: []) => {
  const categories = await prisma.category.findUnique({
    where: { type: categoryName },
    include: { buyers: true },
  });

  if (!categories || !categories.buyers || categories.buyers.length === 0) {
    throw new Error("Щось пішло не так!");
  }

  const calculateOriginalPrice = (buyer: {
    minimum: number;
    maximum: number;
  }) => {
    return (buyer.minimum + buyer.maximum) / 2;
  };

  const calculatePercentage = (originalPrice: number, newPrice: number) => {
    if (originalPrice === 0) return 0;
    return Math.round(((newPrice - originalPrice) / originalPrice) * 100);
  };

  const update = categories.buyers.map((item, index) => {
    const newPrice = newPrices[index];
    const originalPrice = calculateOriginalPrice(item);
    const percentage = calculatePercentage(originalPrice, newPrice);

    return prisma.buyers.update({
      where: { id: item.id },
      data: {
        priceNow: newPrice,
        percentage: percentage,
      },
    });
  });

  await Promise.all(update);
};
