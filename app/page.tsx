



"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/header"
import { SearchIcon, FilterIcon } from "lucide-react"

// Sample campaign data
const campaigns = [
  {
    id: 1,
    title: "Help Sarah Beat Cancer",
    category: "Chronic Illness",
    image: "/placeholder.svg?height=200&width=400",
    raised: 15000,
    goal: 25000,
    daysLeft: 12,
    class: "Personal",
  },
  {
    id: 2,
    title: "Emergency Surgery for Mike",
    category: "Emergency",
    image: "/placeholder.svg?height=200&width=400",
    raised: 8500,
    goal: 10000,
    daysLeft: 5,
    class: "Family",
  },
  {
    id: 3,
    title: "Community Mental Health Center",
    category: "Mental Health",
    image: "/placeholder.svg?height=200&width=400",
    raised: 45000,
    goal: 100000,
    daysLeft: 30,
    class: "Community",
  },
  {
    id: 4,
    title: "Heart Surgery for Baby Emma",
    category: "Surgeries",
    image: "/placeholder.svg?height=200&width=400",
    raised: 32000,
    goal: 50000,
    daysLeft: 18,
    class: "Family",
  },
  {
    id: 5,
    title: "Diabetes Research Initiative",
    category: "Chronic Illness",
    image: "/placeholder.svg?height=200&width=400",
    raised: 75000,
    goal: 150000,
    daysLeft: 45,
    class: "Research",
  },
  {
    id: 6,
    title: "Wheelchair for John",
    category: "Chronic Illness",
    image: "/placeholder.svg?height=200&width=400",
    raised: 3000,
    goal: 5000,
    daysLeft: 20,
    class: "Personal",
  },
]

// Featured campaign (most urgent)
const featuredCampaign = {
  id: 7,
  title: "Emergency Liver Transplant for David",
  category: "Emergency",
  image: "/placeholder.svg?height=400&width=800",
  raised: 42000,
  goal: 75000,
  daysLeft: 3,
  description:
    "David needs an urgent liver transplant after a sudden diagnosis. His family is racing against time to raise funds for this life-saving procedure.",
  class: "Personal",
}

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section with featured campaign */}
        <section className="w-full bg-green-50 py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Urgent Need • {featuredCampaign.daysLeft} days left
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {featuredCampaign.title}
                </h1>
                <p className="text-gray-500 md:text-xl">{featuredCampaign.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className="bg-green-600 h-4 rounded-full"
                    style={{ width: `${(featuredCampaign.raised / featuredCampaign.goal) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">${featuredCampaign.raised.toLocaleString()} raised</span>
                  <span className="text-gray-500">of ${featuredCampaign.goal.toLocaleString()}</span>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={`/campaign/${featuredCampaign.id}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Donate Now</Button>
                  </Link>
                  <Link href={`/campaign/${featuredCampaign.id}`}>
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl">
                <Image
                  src={featuredCampaign.image || "/placeholder.svg"}
                  alt={featuredCampaign.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search and filter section */}
        <section className="w-full py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-1 w-full md:max-w-md">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search campaigns..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="border-gray-300 flex items-center gap-2">
                  <FilterIcon className="h-4 w-4" />
                  Filter
                </Button>
                <Link href="/create-fund/category">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Start a Campaign</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign listings */}
        <section className="w-full py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Active Campaigns</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {campaigns.map((campaign) => (
                <Link href={`/campaign/${campaign.id}`} key={campaign.id}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-white/90 rounded-full px-2 py-1 text-xs font-medium">
                        {campaign.category}
                      </div>
                      <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-medium">
                        {campaign.class}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">{campaign.title}</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">${campaign.raised.toLocaleString()}</span>
                        <span className="text-gray-500">of ${campaign.goal.toLocaleString()}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <div className="text-sm text-gray-500">{campaign.daysLeft} days left</div>
                      <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
                        Donate →
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-green-600 text-green-600">
                View More Campaigns
              </Button>
            </div>
          </div>
        </section>

        {/* Categories section */}
        <section className="w-full py-12 md:py-16 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Link href="/category/emergency">
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-600">Emergency</h3>
                    <p className="text-gray-600 mt-2">Urgent medical needs requiring immediate attention</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/category/chronic">
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-600">Chronic Illness</h3>
                    <p className="text-gray-600 mt-2">Ongoing treatment for long-term medical conditions</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/category/mental">
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-600">Mental Health</h3>
                    <p className="text-gray-600 mt-2">Support for mental health services and treatment</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/category/surgeries">
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-600">Surgeries</h3>
                    <p className="text-gray-600 mt-2">Planned or emergency surgical procedures</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6">
            <p className="text-sm text-gray-500">© 2025 HealthFund. All rights reserved.</p>
            <nav className="flex gap-4 text-sm text-gray-500">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


