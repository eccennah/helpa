import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">HealthFund</span>
        </Link>
        <nav className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-gray-700 hover:text-green-600">
              Log in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Sign up</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

