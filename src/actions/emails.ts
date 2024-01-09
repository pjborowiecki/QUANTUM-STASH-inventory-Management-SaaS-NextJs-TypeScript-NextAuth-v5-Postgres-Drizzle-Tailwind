"use server"

import crypto from "crypto"

import { unstable_noStore as noStore } from "next/cache"
import { getUserByEmail } from "@/actions/users"
import { db } from "@/db"
import { users } from "@/db/schema"
import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"

import { resend } from "@/config/email"
import { EmailVerificationEmail } from "@/components/emails/email-verification-email"

export async function resendEmailVerificationLink(
  email: string
): Promise<"not-found" | "success" | null> {
  try {
    const user = await getUserByEmail(email)
    if (!user) return "not-found"

    const emailVerificationToken = crypto.randomBytes(32).toString("base64url")

    // TODO: Replace with prepared statement
    const userUpdated = await db
      .update(users)
      .set({ emailVerificationToken })
      .where(eq(users.email, email))

    const emailSent = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM,
      to: [email],
      subject: "Verify your email address",
      react: EmailVerificationEmail({ email, emailVerificationToken }),
    })

    return userUpdated && emailSent ? "success" : null
  } catch (error) {
    console.error(error)
    throw new Error("Error resending email verification link")
  }
}

export async function checkIfEmailVerified(email: string): Promise<boolean> {
  try {
    noStore()
    const user = await getUserByEmail(email)
    return user?.emailVerified instanceof Date ? true : false
  } catch (error) {
    console.error(error)
    throw new Error("Error checking if email verified")
  }
}

export async function markEmailAsVerified(
  emailVerificationToken: string
): Promise<boolean> {
  try {
    // TODO: replace with prepared statement
    const userUpdated = await db
      .update(users)
      .set({
        emailVerified: new Date(),
        emailVerificationToken: null,
      })
      .where(eq(users.emailVerificationToken, emailVerificationToken))

    return userUpdated ? true : false
  } catch (error) {
    console.error(error)
    throw new Error("Error marking email as verified")
  }
}
