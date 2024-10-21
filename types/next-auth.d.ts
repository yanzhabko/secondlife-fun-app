import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    discord?: string;
    phoneNumber?: string;
    cardNumber?: string;
    createdAt?: Date;
  }

  interface Session {
    user: {
      discord?: string;
      phoneNumber?: string;
      cardNumber?: string;
      createdAt?: Date;
    } & DefaultUser;
  }

  interface JWT {
    email?: string;
    discord?: string;
    phoneNumber?: string;
    cardNumber?: string;
    createdAt?: string;
  }
}
