"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { updateCategory } from "@/actions/inventory/categories"
import type { Category } from "@/db/schema"
import {
  categorySchema,
  type UpdateCategoryFormInput,
} from "@/validations/inventory"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

interface UpdateCategoryFormProps {
  category: Category
}

export function UpdateCategoryForm({
  category,
}: UpdateCategoryFormProps): JSX.Element {
  const { toast } = useToast()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<UpdateCategoryFormInput>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      id: category.id,
      name: category.name,
      description: category.description || "",
    },
  })

  function onSubmit(formData: UpdateCategoryFormInput) {
    startTransition(async () => {
      try {
        const message = await updateCategory({
          id: category.id,
          name: formData.name,
          description: formData.description,
        })

        switch (message) {
          case "success":
            toast({
              title: "Success!",
              description: "Category updated",
            })
            router.push("/app/inventory/categories")
            break
          case "exists":
            toast({
              title: "This name is already taken",
              description: "Select a different name and try again",
              variant: "destructive",
            })
            break
          default:
            toast({
              title: "Error updating category",
              description: "Please try again",
              variant: "destructive",
            })
        }
      } catch (error) {
        console.error(error)
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
        className="grid w-full gap-5"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full md:w-2/3">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Category name" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full md:w-2/3">
              <FormLabel>Description</FormLabel>

              <FormControl className="min-h-[120px]">
                <Textarea
                  placeholder="Category description (optional)"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <div className=" flex items-center gap-2 pt-2">
          <Button
            disabled={isPending}
            aria-label="Update Category"
            className="w-fit"
          >
            {isPending ? (
              <>
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                <span>Updating...</span>
              </>
            ) : (
              <span>Update Category</span>
            )}
            <span className="sr-only">Update Category</span>
          </Button>

          <Link
            href="/app/inventory/categories"
            className={cn(buttonVariants({ variant: "ghost" }), "w-fit")}
          >
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  )
}
