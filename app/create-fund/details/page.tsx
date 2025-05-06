"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { FundProgress } from "@/components/fund-progress"

export default function DetailsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    days: "",
    class: "",
  })

  // Class options with display names
  const classOptions = [
    { value: "personal", label: "Personal" },
    { value: "family", label: "Family" },
    { value: "community", label: "Community" },
    { value: "nonprofit", label: "Non-profit Organization" },
    { value: "research", label: "Medical Research" },
    { value: "awareness", label: "Awareness Campaign" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, class: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would store this in state management or localStorage
    localStorage.setItem("fundDetails", JSON.stringify(formData))
    router.push("/create-fund/verification")
  }

  // Get the display label for the selected class
  const getSelectedClassLabel = () => {
    const selectedClass = classOptions.find((option) => option.value === formData.class)
    return selectedClass ? selectedClass.label : ""
  }

  const isFormValid = formData.title && formData.description && formData.goalAmount && formData.days && formData.class

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-2">New Fund</h1>
            <p className="text-gray-500 text-center mb-8">Provide details about your fundraising campaign</p>

            <FundProgress currentStep={2} />

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Campaign Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g., Help John with his heart surgery"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="class">Category</Label>
                    <Select value={formData.class} onValueChange={handleSelectChange}>
                      <SelectTrigger id="class" className="w-full">
                        <SelectValue placeholder="Select a category">
                          {getSelectedClassLabel() || "Select a class for your fund"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {classOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Describe the purpose of your campaign and how the funds will be used"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="goalAmount">Goal Amount ($)</Label>
                      <Input
                        id="goalAmount"
                        name="goalAmount"
                        type="number"
                        placeholder="5000"
                        min="1"
                        value={formData.goalAmount}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="days">Campaign Duration (days)</Label>
                      <Input
                        id="days"
                        name="days"
                        type="number"
                        placeholder="30"
                        min="1"
                        max="90"
                        value={formData.days}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Link href="/create-fund/category">
                      <Button type="button" variant="outline" className="border-gray-300">
                        Back
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      disabled={!isFormValid}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Continue
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}



