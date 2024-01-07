"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { addUnit } from "@/actions/inventory/units"
import { unitSchema } from "@/validations/inventory"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

type AddUnitFormInputs = z.infer<typeof unitSchema>

export function AddUnitForm(): JSX.Element {
  const { toast } = useToast()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<AddUnitFormInputs>({
    resolver: zodResolver(unitSchema),
    defaultValues: {
      name: "",
      abbreviation: "",
    },
  })

  function onSubmit(formData: AddUnitFormInputs) {
    startTransition(async () => {
      try {
        const response = await addUnit({
          name: formData.name,
          abbreviation: formData.abbreviation,
        })

        if (response === "success") {
          toast({ title: "Success!", description: "New unit added" })
        }

        router.push("/app/inventory/units")
      } catch (error) {
        toast({
          title: "Something wend wrong",
          description: "Please try again",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-5"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Unit name" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="abbreviation"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Abbreviation</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Unit abbreviation" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <div className=" flex items-center gap-2 pt-2">
          <Button disabled={isPending} aria-label="Add Unit" className="w-fit">
            {isPending ? (
              <>
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                <span>Adding...</span>
              </>
            ) : (
              <span>Add Unit</span>
            )}
            <span className="sr-only">Add Unit</span>
          </Button>

          <Link
            href="/app/inventory/units"
            className={cn(buttonVariants({ variant: "ghost" }), "w-fit")}
          >
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  )
}
