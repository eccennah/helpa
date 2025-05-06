import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">Sign up to start your medical fundraising journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-green-100">
                <TabsTrigger value="email" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Phone
                </TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Create Account
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="phone">
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-phone">Password</Label>
                      <Input id="password-phone" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password-phone">Confirm Password</Label>
                      <Input id="confirm-password-phone" type="password" required />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Create Account
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full border-gray-300 hover:border-green-600 hover:text-green-600">
                Google
              </Button>
              <Button variant="outline" className="w-full border-gray-300 hover:border-green-600 hover:text-green-600">
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              By creating an account, you agree to our{" "}
              <Link href="#" className="underline text-green-600 hover:text-green-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline text-green-600 hover:text-green-700">
                Privacy Policy
              </Link>
            </div>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline text-green-600 hover:text-green-700">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

