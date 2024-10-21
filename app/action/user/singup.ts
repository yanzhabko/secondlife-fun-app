"use server";
import prisma from "@/prisma/index";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendEmail } from "../emails/sendEmail";
import { VerifyEmailEmailTemplate } from "@/app/email-templates/verify-email";

export const singUp = async (name: string, email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return "User with that email already exists.";
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  const emailVerificationToken = crypto.randomBytes(32).toString("base64url");

  await prisma.user.update({
    where: {
      id: createdUser.id,
    },
    data: {
      emailVerificationToken: emailVerificationToken,
    },
  });

  await sendEmail({
    from: "Admin <onboarding@resend.dev>",
    to: [email],
    subject: "Verify your email address",
    react: VerifyEmailEmailTemplate({
      email,
      emailVerificationToken,
    }) as React.ReactElement,
  });

  return "Перевірте вашу пошту!";
};
