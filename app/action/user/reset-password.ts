"use server";
import prisma from "@/prisma/index";
import { sendEmail } from "../emails/sendEmail";
import crypto from "crypto";
import { ResetPasswordEmailTemplate } from "@/app/email-templates/reset-password-email";

export const resendPassword = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error("Користувач не знайдений");
  }

  const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
  const today = new Date();
  const expiryDate = new Date(today.getDate() + 1);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      resetPasswordToken: resetPasswordToken,
      resetPasswordTokenExpiry: expiryDate,
    },
  });

  await sendEmail({
    from: "Admin <onboarding@resend.dev>",
    to: [email],
    subject: "Відновити ваш пароль",
    react: ResetPasswordEmailTemplate({
      email,
      resetPasswordToken,
    }) as React.ReactElement,
  });

  return "Лист надісланий";
};
