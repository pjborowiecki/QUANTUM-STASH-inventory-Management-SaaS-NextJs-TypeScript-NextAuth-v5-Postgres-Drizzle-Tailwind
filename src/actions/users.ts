"use server"

import { unstable_noStore as noStore } from "next/cache"
import {
  psGetUserByEmail,
  psGetUserByEmailVerificationToken,
  psGetUserById,
  psGetUserByResetPasswordToken,
} from "@/db/prepared/auth.statements"
import { type User } from "@/db/schema"

export async function getUserById(id: string): Promise<User | null> {
  noStore()
  try {
    const [user] = await psGetUserById.execute({ id })
    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by id")
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  noStore()
  try {
    const [user] = await psGetUserByEmail.execute({ email })
    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by email")
  }
}

export async function getUserByResetPasswordToken(
  resetPasswordToken: string
): Promise<User | null> {
  noStore()
  try {
    const [user] = await psGetUserByResetPasswordToken.execute({
      resetPasswordToken,
    })
    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by reset password token")
  }
}

export async function getUserByEmailVerificationToken(
  emailVerificationToken: string
): Promise<User | null> {
  noStore()
  try {
    const [user] = await psGetUserByEmailVerificationToken.execute({
      emailVerificationToken,
    })
    return user || null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by email verification token")
  }
}
