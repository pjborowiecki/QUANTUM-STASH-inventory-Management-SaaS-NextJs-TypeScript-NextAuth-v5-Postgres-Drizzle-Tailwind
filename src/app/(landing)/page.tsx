import Link from "next/link"

export default function HomePage(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-3xl">QUANTUM STASH</h2>
      <h3 className="text-2xl text-muted-foreground">Inventory Management</h3>
      <Link href="/app/home/dashboard" className="underline underline-offset-4">
        App Home Dasbhaord Page{" "}
      </Link>
    </main>
  )
}
