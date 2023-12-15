export function ProductDetails(): JSX.Element {
  return (
    <div className="flex h-64 w-full flex-col whitespace-nowrap rounded-md border bg-tertiary transition-all duration-300 ease-in-out hover:bg-secondary/30 xl:w-1/2">
      <div className="flex h-16 items-center space-y-0 bg-secondary/20 px-5">
        <h3 className="font-semibold capitalize tracking-wide">
          Product Details
        </h3>
      </div>
      <div className="flex h-full flex-col items-center justify-center border-t">
        <p className="text-sm tracking-wide text-muted-foreground">
          No product selected
        </p>
      </div>
    </div>
  )
}
