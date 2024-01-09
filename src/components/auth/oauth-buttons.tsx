"use client"

import * as React from "react"
import { unstable_noStore as noStore } from "next/cache"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"

import { DEFAULT_SIGNIN_REDIRECT } from "@/data/constants/index"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function OAuthButtons(): JSX.Element {
  const { toast } = useToast()
  const searchParams = useSearchParams()

  async function handleOAuthSignIn(
    provider: "google" | "github"
  ): Promise<void> {
    try {
      noStore()

      await signIn(provider, {
        callbackUrl: DEFAULT_SIGNIN_REDIRECT,
      })
    } catch (error) {
      searchParams.get("error") === "OAuthAccountNotLinked"
        ? toast({
            title: "Email already in use with another provider",
            description: "",
            variant: "destructive",
          })
        : toast({
            title: "Something went wrong",
            description: "Please try again",
            variant: "destructive",
          })

      console.error(error)
    }
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
      <Button
        aria-label="Sign in with Google"
        variant="outline"
        onClick={() => void handleOAuthSignIn("google")}
        className="w-full sm:w-auto"
      >
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>

      <Button
        aria-label="Sign in with gitHub"
        variant="outline"
        onClick={() => void handleOAuthSignIn("github")}
        className="w-full sm:w-auto"
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  )
}
