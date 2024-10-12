import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      name: string;
      email: string;
      image: string;
      oauthId: string;
      provider: string;
      refreshToken: string;
      accessToken: string;
      provider: string;
    };
  }
}
