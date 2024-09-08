import {
  Account,
  AuthOptions,
  Profile,
  Session,
  User as NextAuthUser,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/prisma/index";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import jwt from "jsonwebtoken";

interface User extends NextAuthUser {
  discord?: string;
  phoneNumber?: string;
  cardNumber?: string;
  createdAt?: Date;
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
          include: {
            contacts: true,
          },
        });
        if (!user || !user.id || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const correctPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!correctPassword) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt,
          discord: user.contacts?.discord,
          phoneNumber: user.contacts?.phoneNumber,
          cardNumber: user.contacts?.cardNumber,
        } as User;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      if (!token) {
        throw new Error("No token to encode");
      }
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) {
        throw new Error("No token to decode");
      }
      const decodedToken = jwt.verify(token, secret);
      if (typeof decodedToken === "string") {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
      }
    },
  },
  callbacks: {
    async session(params: { session: Session; token: JWT }) {
      if (params.session.user) {
        params.session.user.email = params.token.email ?? "";
        params.session.user.discord = params.token.discord ?? "";
        params.session.user.phoneNumber = params.token.phoneNumber ?? "";
        params.session.user.cardNumber = params.token.cardNumber ?? "";

        if (typeof params.token.createdAt === "string") {
          params.session.user.createdAt = new Date(params.token.createdAt);
        }
      }

      return params.session;
    },
    async jwt(params: {
      token: JWT;
      user?: User;
      account?: Account | null;
      profile?: Profile;
      isNewUser?: boolean;
    }) {
      const { token, user } = params;

      if (user) {
        token.email = user.email;
        token.discord = user.discord;
        token.phoneNumber = user.phoneNumber;
        token.cardNumber = user.cardNumber;
        token.createdAt = user.createdAt?.toISOString();
      }

      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
};
