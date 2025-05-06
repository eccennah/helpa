import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/header"

export default function CampaignLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            {/* Campaign Title Skeleton */}
            <Skeleton className="h-10 w-3/4 mb-6" />

            <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
              {/* Left Column - Image and Description Skeletons */}
              <div className="space-y-8">
                {/* Campaign Image Skeleton */}
                <Skeleton className="w-full aspect-[16/10] rounded-lg" />

                {/* Tabs Skeleton */}
                <div className="space-y-6">
                  <div className="flex gap-2 border-b">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-24" />
                  </div>

                  {/* Content Skeleton */}
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              </div>

              {/* Right Column - Donation Info Skeletons */}
              <div className="space-y-6">
                {/* Donation Progress Skeleton */}
                <div className="border rounded-lg p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-6 w-32" />
                    </div>
                    <Skeleton className="h-4 w-full rounded-full" />
                  </div>

                  <div className="flex justify-between">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-24" />
                  </div>

                  {/* Donation Buttons Skeleton */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </div>

                {/* Organizer Info Skeleton */}
                <div className="border rounded-lg p-6 space-y-4">
                  <Skeleton className="h-6 w-40" />
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
