"use client"

import * as React from "react"
import Link from "next/link"
import { addItemSchema } from "@/validations/inventory"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
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
import { Icons } from "@/components/icons"

type AddItemFormInputs = z.infer<typeof addItemSchema>

export function AddItemForm(): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<AddItemFormInputs>({
    resolver: zodResolver(addItemSchema),
    defaultValues: {
      type: "goods",
      name: "",
      unit: "box",
      sku: "",
      returnable: false,
    },
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
        className="grid w-full gap-5"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid grid-cols-2 gap-5">
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
                      {Object.values(["goods", "services"]).map((option) => (
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

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Add product name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
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
                      {Object.values([
                        "box",
                        "cm",
                        "dz",
                        "ft",
                        "g",
                        "in",
                        "kg",
                        "km",
                        "lb",
                        "mg",
                        "ml",
                        "m",
                        "pcs",
                      ]).map((option) => (
                        <SelectItem key={option} value={option}>
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

          <FormField
            control={form.control}
            name="sku"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Add Stock Keeping Unit"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="returnable"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Returnable Item</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2">
          <p>dimensions</p>
          <p>weight</p>
          <p>manufacturer</p>
          <p>brand</p>
          <p>UPC</p>
          <p>MPN</p>
          <p>EAN</p>
          <p>ISBN</p>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <p>SALES INFORMATION</p>
            <p>Selling Price</p>
            <p>Account</p>
            <p>Description</p>
            <p>Tax</p>
          </div>

          <div>
            <p>PURCHASE INFORMATION</p>
            <p>Coust Price</p>
            <p>Account</p>
            <p>Description</p>
            <p>Tax</p>
            <p>Preferred Vendor</p>
          </div>
        </div>

        <div>
          <p>TRACK INVENTORY FOR THIS ITEM</p>
          <p>Inventory Account</p>
          <p>Opening Stock</p>
          <p>Opening Stork Rate Per Unit</p>
          <p>Reorder point</p>
        </div>

        <div className=" flex items-center gap-2 pt-2">
          <Button disabled={isPending} aria-label="Add Item" className="w-fit">
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

          <Link
            href="/app/inventory/items"
            className={cn(buttonVariants({ variant: "ghost" }), "w-fit")}
          >
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  )
}
