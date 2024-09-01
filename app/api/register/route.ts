import { NextResponse } from "next/server";
import prisma from "@/prisma/index";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, password } = data;
    if (!name || !email || !password) {
      return new NextResponse("Заповність всі поля!", { status: 500 });
    }

    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email: email,
        name: name,
      },
    });
    if (userAlreadyExist?.id) {
      return new NextResponse("Такий користувач уже створений!", {
        status: 500,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        hashedPassword: hashedPassword,
      },
    });

    return NextResponse.json(newUser);
  } catch (err: any) {
    return new NextResponse("Сталась помилка!", { status: 500 });
  }
}
