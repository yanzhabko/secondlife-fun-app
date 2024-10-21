"use server";

import { CreateEmailOptions, CreateEmailRequestOptions, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  payload: CreateEmailOptions,
  options?: CreateEmailRequestOptions | undefined
) => {
  const result = await resend.emails.send(payload, options);

  return result;
};
