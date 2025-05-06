"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { CalendarIcon, UsersIcon, ClockIcon, FacebookIcon, TwitterIcon, LinkedinIcon, MailIcon } from "lucide-react"

// Sample campaign data - in a real app, this would come from an API or database
const campaignData = {
  id: "1",
  title: "Help Sarah Beat Cancer",
  category: "Chronic Illness",
  class: "Personal",
  image: "/placeholder.svg?height=500&width=800",
  raised: 15000,
  goal: 25000,
  daysLeft: 12,
  donorsCount: 143,
  organizer: {
    name: "John Smith",
    relationship: "Brother",
    location: "New York, NY",
    image: "/placeholder.svg?height=100&width=100",
  },
  beneficiary: {
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
  },
  createdAt: "2023-04-15T00:00:00Z",
  description: `
    <p>My sister Sarah was recently diagnosed with stage 3 breast cancer. This diagnosis came as a shock to our entire family, as Sarah has always been the picture of health and vitality. At just 34 years old, she now faces the fight of her life.</p>
    
    <p>The doctors have recommended an aggressive treatment plan that includes surgery, chemotherapy, and radiation. While we are thankful that her prognosis is positive with proper treatment, the financial burden is overwhelming. Sarah is a single mother to two beautiful children, ages 5 and 7, and works as a kindergarten teacher. Her health insurance will cover some of the medical expenses, but there are significant out-of-pocket costs that are not covered.</p>
    
    <p>We are raising funds to help cover:</p>
    
    <ul>
      <li>Medical expenses not covered by insurance (estimated at $15,000)</li>
      <li>Living expenses during treatment when Sarah will be unable to work full-time</li>
      <li>Childcare costs during hospital stays and recovery periods</li>
      <li>Transportation to and from medical appointments</li>
    </ul>
    
    <p>Sarah has always been the first to help others in need. She volunteers at the local food bank, coaches her daughter's soccer team, and is always there for friends and family during difficult times. Now, she needs our help.</p>
    
    <p>Any contribution, no matter how small, will make a difference in Sarah's fight against cancer. If you are unable to donate, please share this campaign with your network. Your support means the world to Sarah and our family during this challenging time.</p>
    
    <p>Thank you for your kindness and generosity.</p>
  `,
  updates: [
    {
      id: "1",
      date: "2023-05-10T00:00:00Z",
      title: "Surgery Scheduled",
      content: "Sarah's surgery has been scheduled for May 20th. We are hopeful and grateful for all your support.",
    },
    {
      id: "2",
      date: "2023-05-25T00:00:00Z",
      title: "Surgery Successful",
      content: "The surgery went well! Sarah is now recovering at home. The doctors are optimistic about her progress.",
    },
  ],
  comments: [
    {
      id: "1",
      name: "Mary Williams",
      date: "2023-05-05T00:00:00Z",
      amount: 100,
      message: "Sending love and strength to Sarah. You got this!",
    },
    {
      id: "2",
      name: "Robert Johnson",
      date: "2023-05-07T00:00:00Z",
      amount: 250,
      message: "Our family is praying for a quick recovery. Stay strong!",
    },
    {
      id: "3",
      name: "Anonymous",
      date: "2023-05-12T00:00:00Z",
      amount: 50,
      message: "",
    },
  ],
}

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default function CampaignDetailPage() {
  const params = useParams()
  const [campaign, setCampaign] = useState(campaignData)
  const [donationAmount, setDonationAmount] = useState("50")

  // In a real app, you would fetch the campaign data based on the ID
  useEffect(() => {
    // Simulating API call
    console.log(`Fetching campaign with ID: ${params.id}`)
    // setCampaign(fetchedCampaign)
  }, [params.id])

  const progressPercentage = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            {/* Campaign Title */}
            <h1 className="text-3xl font-bold mb-6 md:text-4xl">{campaign.title}</h1>

            <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
              {/* Left Column - Image and Description */}
              <div className="space-y-8">
                {/* Campaign Image */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Campaign Description */}
                <div className="space-y-6">
                  <Tabs defaultValue="story" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="story">Story</TabsTrigger>
                      <TabsTrigger value="updates">Updates ({campaign.updates.length})</TabsTrigger>
                      <TabsTrigger value="comments">Comments ({campaign.comments.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="story" className="pt-6">
                      <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: campaign.description }}
                      ></div>
                    </TabsContent>

                    <TabsContent value="updates" className="pt-6">
                      <div className="space-y-6">
                        {campaign.updates.map((update) => (
                          <Card key={update.id}>
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg">{update.title}</h3>
                                <span className="text-sm text-gray-500">{formatDate(update.date)}</span>
                              </div>
                              <p>{update.content}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="comments" className="pt-6">
                      <div className="space-y-6">
                        {campaign.comments.map((comment) => (
                          <Card key={comment.id}>
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold">{comment.name}</h3>
                                <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                              </div>
                              <p className="text-green-600 font-medium">${comment.amount}</p>
                              {comment.message && <p className="mt-2">{comment.message}</p>}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Right Column - Donation Info and Actions */}
              <div className="space-y-6">
                {/* Donation Progress */}
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-2xl font-bold">${campaign.raised.toLocaleString()}</span>
                        <span className="text-gray-500">raised of ${campaign.goal.toLocaleString()} goal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-green-600 h-4 rounded-full"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <UsersIcon className="h-4 w-4 text-gray-500" />
                        <span>{campaign.donorsCount} donors</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4 text-gray-500" />
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                    </div>

                    {/* Donation Buttons */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        {["25", "50", "100"].map((amount) => (
                          <Button
                            key={amount}
                            variant={donationAmount === amount ? "default" : "outline"}
                            className={
                              donationAmount === amount ? "bg-green-600 hover:bg-green-700" : "border-gray-300"
                            }
                            onClick={() => setDonationAmount(amount)}
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          min="5"
                        />
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                        Donate Now
                      </Button>
                    </div>

                    {/* Share Buttons */}
                    <div className="space-y-2">
                      <p className="text-center text-sm text-gray-500">Share this campaign</p>
                      <div className="flex justify-center gap-2">
                        <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                          <FacebookIcon className="h-5 w-5 text-blue-600" />
                          <span className="sr-only">Share on Facebook</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                          <TwitterIcon className="h-5 w-5 text-blue-400" />
                          <span className="sr-only">Share on Twitter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                          <LinkedinIcon className="h-5 w-5 text-blue-700" />
                          <span className="sr-only">Share on LinkedIn</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                          <MailIcon className="h-5 w-5 text-gray-600" />
                          <span className="sr-only">Share via Email</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Organizer Info */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold">Campaign Organizer</h3>
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={campaign.organizer.image || "/placeholder.svg"}
                          alt={campaign.organizer.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{campaign.organizer.name}</p>
                        <p className="text-sm text-gray-500">{campaign.organizer.location}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <h3 className="font-semibold mb-3">Beneficiary</h3>
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={campaign.beneficiary.image || "/placeholder.svg"}
                            alt={campaign.beneficiary.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{campaign.beneficiary.name}</p>
                          <p className="text-sm text-gray-500">{campaign.organizer.relationship} of the organizer</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t text-sm text-gray-500">
                      <div className="flex items-center gap-1 mb-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Campaign created on {formatDate(campaign.createdAt)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Related Campaigns */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Campaigns</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((id) => (
                  <Link href={`/campaign/${id}`} key={id}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <div className="aspect-[16/9] relative">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Related Campaign"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-white/90 rounded-full px-2 py-1 text-xs font-medium">
                          {campaign.category}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-2 line-clamp-1">Another Medical Campaign</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">$12,000</span>
                          <span className="text-gray-500">of $20,000</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8 mt-16">
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
