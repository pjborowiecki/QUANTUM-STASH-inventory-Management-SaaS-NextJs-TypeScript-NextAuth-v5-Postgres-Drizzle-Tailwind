"use server"

import crypto from "crypto"

import { AuthError } from "next-auth"
import { getUserByEmail, getUserByResetPasswordToken } from "@/actions/users"
import { signIn } from "@/auth"
import { db } from "@/db"
import { users, type NewUser } from "@/db/schema"
import { env } from "@/env.mjs"
import {
  signInWithPasswordSchema,
  signUpWithPasswordSchema,
  type SignInWithPasswordFormInput,
  type SignUpWithPasswordFormInput,
} from "@/validations/auth"
import bcryptjs from "bcryptjs"
import { eq } from "drizzle-orm"

import { resend } from "@/config/email"
import { EmailVerificationEmail } from "@/components/emails/email-verification-email"
import { ResetPasswordEmail } from "@/components/emails/reset-password-email"

export async function signUpWithPassword(
  rawInput: SignUpWithPasswordFormInput
): Promise<"invalid-input" | "exists" | "success" | "error"> {
  const validatedInput = signUpWithPasswordSchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  try {
    const user = await getUserByEmail(validatedInput.data.email)
    if (user) return "exists"

    const passwordHash = await bcryptjs.hash(validatedInput.data.password, 10)

    // TODO: Replace with prepared statement
    const newUserResponse = await db.insert(users).values({
      id: crypto.randomUUID(),
      email: validatedInput.data.email,
      passwordHash,
    } as NewUser)

    if (!newUserResponse) return "error"

    const emailVerificationToken = crypto.randomBytes(32).toString("base64url")

    // TODO: Replace with prepared statement
    const updatedUserResponse = await db
      .update(users)
      .set({ emailVerificationToken })
      .where(eq(users.email, validatedInput.data.email))

    const emailSent = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM,
      to: [validatedInput.data.email],
      subject: "Verify your email address",
      react: EmailVerificationEmail({
        email: validatedInput.data.email,
        emailVerificationToken,
      }),
    })

    return updatedUserResponse && emailSent ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error signing up with password")
  }
}

export async function signInWithPassword(
  rawInput: SignInWithPasswordFormInput
): Promise<
  | "invalid-input"
  | "invalid-credentials"
  | "not-registered"
  | "unverified-email"
  | "incorrect-provider"
  | "success"
> {
  const validatedInput = signInWithPasswordSchema.safeParse(rawInput)
  if (!validatedInput.success) return "invalid-input"

  const existingUser = await getUserByEmail(validatedInput.data.email)
  if (!existingUser) return "not-registered"

  if (!existingUser.email || !existingUser.passwordHash)
    return "incorrect-provider"

  if (!existingUser.emailVerified) return "unverified-email"

  try {
    await signIn("credentials", {
      email: validatedInput.data.email,
      password: validatedInput.data.password,
      redirect: false,
    })

    return "success"
  } catch (error) {
    console.error(error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "invalid-credentials"
        default:
          throw error
      }
    } else {
      throw error
    }
  }
}

export async function resetPassword(
  email: string
): Promise<"not-found" | "success" | null> {
  const user = await getUserByEmail(email)
  if (!user) return "not-found"

  const today = new Date()
  const resetPasswordToken = crypto.randomBytes(32).toString("base64url")
  const resetPasswordTokenExpiry = new Date(today.setDate(today.getDate() + 1)) // 24 hours from now

  try {
    // TODO: Replace with prepared statement
    const userUpdatedResponse = await db
      .update(users)
      .set({
        resetPasswordToken,
        resetPasswordTokenExpiry,
      })
      .where(eq(users.email, email))

    const emailSent = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM,
      to: [email],
      subject: "Reset your password",
      react: ResetPasswordEmail({ email, resetPasswordToken }),
    })

    return userUpdatedResponse && emailSent ? "success" : null
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function updatePassword(
  resetPasswordToken: string,
  password: string
): Promise<"not-found" | "expired" | "success" | null> {
  try {
    const user = await getUserByResetPasswordToken(resetPasswordToken)
    if (!user) return "not-found"

    const resetPasswordExpiry = user.resetPasswordTokenExpiry
    if (!resetPasswordExpiry || resetPasswordExpiry < new Date())
      return "expired"

    const passwordHash = await bcryptjs.hash(password, 10)

    // TODO: Replace with prepared statement
    const userUpdatedResponse = await db
      .update(users)
      .set({
        passwordHash,
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
      })
      .where(eq(users.id, user.id))

    return userUpdatedResponse ? "success" : null
  } catch (error) {
    console.error(error)
    throw new Error("Error updating password")
  }
}

export async function linkOAuthAccount(userId: string): Promise<void> {
  try {
    await db
      .update(users)
      .set({ emailVerified: new Date() })
      .where(eq(users.id, userId))
  } catch (error) {
    console.error(error)
    throw new Error("Error linking OAuth account")
  }
}
