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

type AddItemFormInputs = z.infer<typeof addItemSchema>

export function AddItemForm(): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<AddItemFormInputs>({
    resolver: zodResolver(addItemSchema),
    defaultValues: {
      name: "",
      description: "",
      sku: "",
      barcode: "",
      supplier: "",
      images: "",
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
        className="grid w-full gap-10"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Product name" {...field} />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value: typeof field.value) =>
                    field.onChange(value)
                  }
                >
                  <FormControl>
                    <SelectTrigger className="capitalize">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(["electronics", "clothes", "books"]).map(
                        (option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            className="capitalize"
                          >
                            {option}
                          </SelectItem>
                        )
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value: typeof field.value) =>
                    field.onChange(value)
                  }
                >
                  <FormControl>
                    <SelectTrigger className="capitalize">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(["lenovo", "asus", "nike"]).map(
                        (option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            className="capitalize"
                          >
                            {option}
                          </SelectItem>
                        )
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="barcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Barcode</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Product barcode" {...field} />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-start-1 col-end-3">
                <FormLabel>Description</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="Description (optional)"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <FormField
            control={form.control}
            name="sellingPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Selling Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Single item selling price"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="purchasePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purchase Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Cost of acquiring the item"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="taxRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tax Rate (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Tax rate"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Width</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Product width"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Product height"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="depth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Depth</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Product depth"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dimensionsUnit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dimensions Unit (width, height, depth)</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value: typeof field.value) =>
                    field.onChange(value)
                  }
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(["cm", "m", "in"]).map((option) => (
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
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Product weight"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weightUnit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight Unit</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value: typeof field.value) =>
                    field.onChange(value)
                  }
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(["kg", "g", "lb"]).map((option) => (
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
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <FormField
            control={form.control}
            name="warehouse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Warehouse (storage location)</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value: typeof field.value) =>
                    field.onChange(value)
                  }
                >
                  <FormControl>
                    <SelectTrigger className="capitalize">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(["main", "branch 1", "branch 2"]).map(
                        (option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            className="capitalize"
                          >
                            {option}
                          </SelectItem>
                        )
                      )}
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
                <FormLabel>SKU</FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    placeholder="Stock Keeping Unit"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Quantity in stock"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
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
                      {Object.values(["box", "piece"]).map((option) => (
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
            name="reorderPoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reorder Point</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Quantity at which to reorder"
                    value={Number.isNaN(field.value) ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="supplier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supplier</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Product supplier"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>

              <FormControl>
                <Textarea
                  placeholder="Additional notes"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Product images upload"
                  {...field}
                />
              </FormControl>
              <FormMessage className="sm:text-sm" />
            </FormItem>
          )}
        />

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
