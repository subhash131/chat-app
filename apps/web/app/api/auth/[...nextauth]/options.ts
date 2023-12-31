import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "../../config/db";
import { User } from "../../mongodb/models/userModel";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "subhash" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials!;
        try {
          await connectDb();
          const user = await User?.findOne({ email });
          if (!user) {
            return null;
          }
          const pwdMatch = await bcrypt.compare(password, user.password);
          if (!pwdMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
