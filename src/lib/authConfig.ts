import NextAuth, { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig: NextAuthConfig = {
  providers: [],
  callbacks: {
    authorized: ({ request, auth }) => {
      const redirectUrl = request.nextUrl.clone();
      if (
        request.nextUrl.pathname.startsWith("/admin") &&
        !auth?.user.isAdmin
      ) {
        redirectUrl.pathname = "/login";

        return NextResponse.redirect(redirectUrl);
      }
      if (request.nextUrl.pathname.startsWith("/blog") && !auth?.user) {
        redirectUrl.pathname = "/login";
        return NextResponse.redirect(redirectUrl);
      }
      if (request.nextUrl.pathname.startsWith("/login") && auth?.user) {
        redirectUrl.pathname = "/";
        return NextResponse.redirect(redirectUrl);
      }
      return true;
    },
  },
  pages: { signIn: "/login" },
};

export const { auth } = NextAuth(authConfig);

export default authConfig;
