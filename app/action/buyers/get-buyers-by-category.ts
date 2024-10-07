"use server";

import prisma from "@/prisma/index";

export const getBuyersByCategory = async (categoryName: string) => {
  const categories = await prisma.category.findFirst({
    where: { type: categoryName },
    include: {
      buyers: true,
    },
  });

  if (!categories) {
    throw new Error("Категорії не знайдено");
  }

  if (categories?.buyers.length === 0) {
    throw new Error("Сталась помилка!");
  }

  return {
    time: {
      updated: categories.updatedAt,
      latest: categories.latestUpdate || null,
    },
    categories: categories,
    buyers: categories?.buyers,
  };
};
