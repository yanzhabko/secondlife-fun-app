"use server";

import prisma from "@/prisma/index";
import { buyers } from "@/lib";

export const addBuyers = async () => {
  try {
    for (const [categoryType, buyersList] of Object.entries(buyers)) {
      const category = await prisma.category.findUnique({
        where: { type: categoryType },
      });

      if (!category) {
        throw new Error(`Category ${categoryType} does not exist`);
      }

      await prisma.buyers.createMany({
        data: buyersList.map((buyer) => ({
          title: buyer.name,
          minimum: buyer.min,
          maximum: buyer.max,
          priceNow: buyer.nowPrice,
          percentage: buyer.percentage,
          categoryId: category.id,
        })),
      });
    }

    return "Buyers added or already exist";
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error adding buyers: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while adding buyers.");
    }
  }
};
