import type { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { getUserByEmail } from "@/actions/users"
import { env } from "@/env.mjs"
import { signInWithPasswordSchema } from "@/validations/auth"
import bcryptjs from "bcryptjs"

import { resend } from "@/config/email"
import { siteConfig } from "@/config/site"
import { MagicLinkEmail } from "@/components/emails/magic-link-email"

export default {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(rawCredentials) {
        console.log("Entering auth.config authorize function")
        const validatedCredentials =
          signInWithPasswordSchema.safeParse(rawCredentials)

        console.log("Past the auth.config server-side input validation")

        if (validatedCredentials.success) {
          const user = await getUserByEmail(validatedCredentials.data.email)
          if (!user || !user.passwordHash) return null

          console.log("Past the auth.config check for existing user")

          const passwordIsValid = await bcryptjs.compare(
            validatedCredentials.data.password,
            user.passwordHash
          )

          console.log("Past the auth.config check if valid password")

          console.log("USER from auth.config (actual return)", user)
          if (passwordIsValid) return user
        }
        console.log("OK, WAIT!! Returning null from auth.config !!!")
        return null
      },
    }),
    EmailProvider({
      type: "email",
      server: {
        host: env.RESEND_HOST,
        port: Number(env.RESEND_PORT),
        auth: {
          user: env.RESEND_USERNAME,
          pass: env.RESEND_API_KEY,
        },
      },
      async sendVerificationRequest({
        identifier,
        url,
      }: {
        identifier: string
        url: string
      }) {
        try {
          const emailSent = await resend.emails.send({
            from: env.RESEND_EMAIL_FROM,
            to: [identifier],
            subject: `${siteConfig.name} magic link sign in`,
            react: MagicLinkEmail({ identifier, url }),
          })
          return void { success: true, data: emailSent }
        } catch (error) {
          throw new Error("Failed to send verification email")
        }
      },
    }),
  ],
} satisfies NextAuthConfig
