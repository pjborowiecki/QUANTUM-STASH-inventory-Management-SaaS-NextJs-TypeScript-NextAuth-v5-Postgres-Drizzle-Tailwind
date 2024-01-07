"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { addWarehouse } from "@/actions/warehouses"
import { warehouseSchema } from "@/validations/warehouses"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

type AddWarehouseFormInputs = z.infer<typeof warehouseSchema>

export function AddWarehouseForm(): JSX.Element {
  const { toast } = useToast()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<AddWarehouseFormInputs>({
    resolver: zodResolver(warehouseSchema),
    defaultValues: {
      name: "",
      type: "branch",
      location: "",
      description: "",
    },
  })

  function onSubmit(formData: AddWarehouseFormInputs) {
    startTransition(async () => {
      try {
        const response = await addWarehouse(formData)

        if (response === "success") {
          toast({ title: "Success!", description: "New category added" })
        }

        router.push("/app/inventory/categories")
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
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Warehouse name" {...field} />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value: typeof field.value) =>
                    field.onChange(value)
                  }
                >
                  <FormControl>
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder={field.value} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(["branch", "main"]).map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className="capitalize"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Warehouse location"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Warehouse description"
                  className="min-h-[120px]"
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
            aria-label="Add Warehouse"
            className="w-fit"
          >
            {isPending ? (
              <>
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                <span>Adding...</span>
              </>
            ) : (
              <span>Add Warehouse</span>
            )}
            <span className="sr-only">Add Warehouse</span>
          </Button>

          <Link
            href="/app/warehouses"
            className={cn(buttonVariants({ variant: "ghost" }), "w-fit")}
          >
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  )
}
