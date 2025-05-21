import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src= "/images/Helpa-logo.jpg"
            alt="Helpa Logo"
            width={100}
            height={4}
            priority
          />
        </Link>
        <nav className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-black hover:text-gray-700">
              Log in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-black hover:bg-gray-800 text-white">
              Sign up
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

