"use server";

import prisma from "@/prisma/index";

export const addCategories = async () => {
  try {
    const categories = [
      { type: "fish", title: "Риба" },
      { type: "vegetables", title: "Овочі" },
      { type: "other", title: "Інше" },
    ];

    for (const { type, title } of categories) {
      await prisma.category.upsert({
        where: { type },
        update: {},
        create: { type, title },
      });
    }

    return "Categories added or already exist";
  } catch (error: any) {
    throw new Error(`Error adding categories: ${error.message}`);
  }
};
