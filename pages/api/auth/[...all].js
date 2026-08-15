// pages/api/auth/[...all].js
import NextAuth from "next-auth";
// Import your authentication providers (e.g., Credentials, Google, GitHub)
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add authentication logic here
        if (credentials?.email && credentials?.password) {
          return { id: "1", name: "User", email: credentials.email };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
};

export default NextAuth(authOptions);