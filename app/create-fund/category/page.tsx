"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { FundProgress } from "@/components/fund-progress"

export default function CategoryPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: "emergency", name: "Emergency", description: "Urgent medical needs requiring immediate attention" },
    { id: "chronic", name: "Chronic Illness", description: "Ongoing treatment for long-term medical conditions" },
    { id: "mental", name: "Mental Health", description: "Support for mental health services and treatment" },
    { id: "surgery", name: "Surgeries", description: "Planned or emergency surgical procedures" },
  ]    

  const handleContinue = () => {
    if (selectedCategory) {
      // In a real app, you would store this in state management or localStorage
      localStorage.setItem("fundCategory", selectedCategory)
      router.push("/create-fund/details")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-2">Create a Health Fund</h1>
            <p className="text-gray-500 text-center mb-8">Select a category for your fundraising campaign</p>

            <FundProgress currentStep={1} />

            <div className="grid gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category.id
                      ? "border-green-600 ring-2 ring-green-600"
                      : "border-gray-200 hover:border-green-400"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                    <p className="text-gray-500">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <Link href="/">
                <Button variant="outline" className="border-gray-300">
                  Cancel
                </Button>
              </Link>
              <Button
                onClick={handleContinue}
                disabled={!selectedCategory}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

