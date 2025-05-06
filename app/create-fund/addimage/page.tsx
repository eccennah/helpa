"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { FundProgress } from "@/components/fund-progress"
import { UploadIcon, ImageIcon, XIcon } from "lucide-react"

export default function AddImagePage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string)
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const reader = new FileReader()

      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string)
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const removeImage = () => {
    setImage(null)
  }

  const handleContinue = () => {
    setIsUploading(true)

    // Simulate upload delay
    setTimeout(() => {
      // In a real app, you would upload the image to a server
      // and store the URL in localStorage or state management
      if (image) {
        localStorage.setItem("campaignImage", image)
      }

      setIsUploading(false)
      router.push("/create-fund/success")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-2">Add Campaign Image</h1>
            <p className="text-gray-500 text-center mb-8">Upload an image to make your campaign more visible</p>

            <FundProgress currentStep={4} />

            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Campaign Image</h2>
                    <p className="text-sm text-gray-500">
                      A compelling image helps your campaign stand out and connect with potential donors.
                    </p>
                  </div>

                  {image ? (
                    <div className="relative rounded-lg overflow-hidden border">
                      <div className="aspect-[16/9] relative">
                        <Image src={image || "/placeholder.svg"} alt="Campaign preview" fill className="object-cover" />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8 rounded-full"
                        onClick={removeImage}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <div className="flex flex-col items-center">
                        <ImageIcon className="h-16 w-16 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Drag and drop your image here</h3>
                        <p className="text-sm text-gray-500 mb-4">or click to browse from your device</p>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="border-green-600 text-green-600"
                        >
                          <UploadIcon className="h-4 w-4 mr-2" />
                          Upload Image
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="text-sm text-gray-500">
                    <p>Recommended image specifications:</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Minimum dimensions: 1200 x 675 pixels</li>
                      <li>Aspect ratio: 16:9</li>
                      <li>Maximum file size: 5MB</li>
                      <li>Formats: JPG, PNG, or GIF</li>
                    </ul>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Link href="/create-fund/verification">
                      <Button type="button" variant="outline" className="border-gray-300">
                        Back
                      </Button>
                    </Link>
                    <Button
                      onClick={handleContinue}
                      disabled={!image || isUploading}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      {isUploading ? "Uploading..." : "Continue"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
