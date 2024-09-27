import connectToMongo from "@/config/dbConn";
import { Users } from "@/config/models";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
  interface User {

    _id?: string;
    username?: string;
  }
  interface Session {
user:{
email ?: string |null;
  _id?: string;
  username?: string;
}
  }
}
declare module "next-auth/jwt" {
  interface JWT {

    _id?: string;
    username?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async ({ username, password }) => {
        console.log(username, "username");
        console.log(password, "pwd");
        try {
          connectToMongo();
          const user = await Users.findOne({ username }).exec();
          console.log(user, "Mongo User");
          if (user) {
            return bcrypt.compare(password, user.password).then(res=>{
              console.log(res, 'Result')
              return res
              ? { username: user.username, email: user.email, _id: user._id }
              : null})
            
          }
        } catch (error) {
          console.log(error);
          // throw new Error('Error validating user credentials')
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
          return true;
        } else {
          console.log("User account does not have an email.");
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        // Add the user fields to the token
        token._id = user._id;
        token.username = user.username;
        if (user.email == null) token.email = undefined;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user._id = token._id;
      session.user.username = token.username;
      session.user.email = token.email;
      return session;
    },
  },
});
