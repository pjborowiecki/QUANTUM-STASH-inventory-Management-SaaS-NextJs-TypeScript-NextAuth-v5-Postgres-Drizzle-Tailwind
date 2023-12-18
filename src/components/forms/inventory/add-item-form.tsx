"use client"

import * as React from "react"
import { addItemSchema } from "@/validations/inventory"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Icons } from "@/components/icons"

type AddItemFormInputs = z.infer<typeof addItemSchema>

export function AddItemForm(): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<AddItemFormInputs>({
    resolver: zodResolver(addItemSchema),
    defaultValues: {},
  })

  function onSubmit(formData: AddItemFormInputs) {
    startTransition(() => {
      try {
        console.log(formData)
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        Add Item Form
        <Button disabled={isPending} className="w-fit">
          {isPending ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              <span>Adding...</span>
            </>
          ) : (
            <span>Add Item</span>
          )}
          <span className="sr-only">Add Item</span>
        </Button>
      </form>
    </Form>
  )
}
