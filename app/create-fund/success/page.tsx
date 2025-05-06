"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { FundProgress } from "@/components/fund-progress"
import { CheckCircleIcon, ShareIcon } from "lucide-react"

export default function SuccessPage() {
  // In a real app, you would get the campaign ID from the API response
  // For this demo, we'll use a hardcoded ID that we know exists
  const campaignId = "1"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <FundProgress currentStep={5} />

            <Card className="text-center">
              <CardContent className="p-10">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircleIcon className="h-16 w-16 text-green-600" />
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-2">Congratulations!</h1>
                <p className="text-xl text-gray-600 mb-6">Your health fund has been published</p>

                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Your campaign is now live. Share it with friends and family to start receiving donations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`/campaign/${campaignId}`}>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">View Your Campaign</Button>
                  </Link>
                  <Button variant="outline" className="border-green-600 text-green-600 flex items-center gap-2">
                    <ShareIcon className="h-4 w-4" />
                    Share Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}


  