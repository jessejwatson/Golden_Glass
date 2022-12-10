import NextAuth from "next-auth/next";
import GoogleProvidor from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvidor({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          })
    ],
    secret: process.env.JWT_SECRET
})