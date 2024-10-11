import connectToMongo from "@/config/dbConn";
import { Users } from "@/config/models";
import bcrypt from "bcryptjs";
import NextAuth, { DefaultSession } from "next-auth";
import { AccessDenied } from "@auth/core/errors";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import authConfig from "./authConfig";
declare module "next-auth" {
  interface User {
    email?: string | null;
    _id?: string;
    username?: string;
    isAdmin?: boolean;
  }
  interface Session {
    user: {
      _id?: string;
      username?: string;
      email ?: string | null; 
      isAdmin ?: boolean
    } & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    username?: string;
    email ?: string | null; 
     isAdmin ?: boolean
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub,
    Google,
    Credentials({
      authorize: async ({
        username,
        password,
      }: Partial<Record<string, unknown>>) => {
        try {
          connectToMongo();
          const user = await Users.findOne({ username }).exec();

          if (user === null) {
            console.log("User not found");
            return null;
          } else {
            return bcrypt.compare(password, user.password).then((res) => {
              console.log(res, "Result");
              return res
                ? { username: user.username, email: user.email, _id: user._id }
                : null;
            });
          }
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        if (user.email) {
          connectToMongo();
          if (!(await Users.exists({ email: user.email }))) {
            await Users.create({
              email: user.email,
              img: user.image,
              username: user.name,
            });
          }
        }
        return true;
        // return false
      } catch (error) {
        console.log(error, "From within signin callback");
        return false;
        // throw new AuthError("Something went wrong.")
      }
    },
    async jwt({ token, user }) {
      if (user) {
        // Add the user fields to the token
        token._id = user._id;
        token.username = user.username;
        if (user.email == null) token.email = undefined;
        token.email = user.email;
        token.isAdmin = user.isAdmin
      }
      return token;
    },
    async session({ session, token }) {
      session.user._id = token._id;
      session.user.username = token.username;
      session.user.email = token?.email;
      session.user.isAdmin = token?.isAdmin
      return session;
    },
    ...authConfig.callbacks
  },
});
