"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { deleteWarehouse, updateWarehouse } from "@/actions/warehouses"
import type { Warehouse } from "@/db/schema"
import {
  warehouseSchema,
  type UpdateWarehouseFormInput,
} from "@/validations/warehouses"
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

interface UpdateWarehouseFormProps {
  warehouse: Warehouse
}

export function UpdateWarehouseForm({
  warehouse,
}: UpdateWarehouseFormProps): JSX.Element {
  const { toast } = useToast()
  const router = useRouter()
  const [isUpdating, startUpdateTransition] = React.useTransition()
  const [isDeleting, startDeleteTransition] = React.useTransition()

  const form = useForm<UpdateWarehouseFormInput>({
    resolver: zodResolver(warehouseSchema),
    defaultValues: {
      id: warehouse.id,
      name: warehouse.name,
      type: warehouse.type,
      description: warehouse.description || "",
      location: warehouse.location,
    },
  })

  function onSubmit(formData: UpdateWarehouseFormInput) {
    startUpdateTransition(async () => {
      try {
        const message = await updateWarehouse({
          id: warehouse.id,
          name: formData.name,
          type: formData.type,
          description: formData.description,
          location: formData.location,
        })

        switch (message) {
          case "success":
            toast({
              title: "Success!",
              description: "Warehouse updated",
            })
            router.push("/app/warehouses")
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
              title: "Error updating warehouse",
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
                  placeholder="Warehouse description (optional)"
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
            disabled={isDeleting || isUpdating}
            aria-label="Update Warehouse"
            className="w-fit"
          >
            {isUpdating ? (
              <>
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                <span>Updating...</span>
              </>
            ) : (
              <span>Update Warehouse</span>
            )}
            <span className="sr-only">Update Warehouse</span>
          </Button>

          <Button
            disabled={isDeleting || isUpdating}
            aria-label="Delete Warehouse"
            className="w-fit"
            variant="destructive"
            onClick={() =>
              startDeleteTransition(async () => {
                void form.trigger(["name", "description", "location", "type"])
                const deletedWarehouse = await deleteWarehouse({
                  id: warehouse.id,
                })
                if (deletedWarehouse) {
                  toast({
                    title: "Success!",
                    description: "Selected warehouse has been deleted",
                  })
                  router.push("/app/warehouses")
                  router.refresh()
                } else {
                  toast({
                    title: "Something went wrong",
                    description: "Failed to delete selected warehouse",
                    variant: "destructive",
                  })
                }
              })
            }
          >
            {isDeleting ? (
              <>
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                <span>Deleting...</span>
              </>
            ) : (
              <span>Delete Warehouse</span>
            )}
            <span className="sr-only">Delete Warehouse</span>
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
