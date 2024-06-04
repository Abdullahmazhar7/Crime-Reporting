
import Link from "next/link"
import { CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Community() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t-4">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Community"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/Community.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">Empowering Our Community</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our decentralized crime reporting system gives you a voice and helps keep our community safe.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/reportCrime"
                  >
                    Report a Crime
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="About"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
                  Community Stories
                </div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">Hear from Our Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Read about how our decentralized crime reporting system has helped make our community safer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <img
                    alt="Community Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="200"
                    src="/Com-1.jpg"
                    width="300"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Safer Neighborhood Thanks to the App</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "I was able to report a suspicious activity in my neighborhood and the police responded quickly. I
                      feel much safer now."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Community Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="200"
                    src="/Com-2.jpg"
                    width="300"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Empowered to Make a Difference</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "I was able to report a crime in my neighborhood and the community came together to address the
                      issue. I feel like I can make a difference."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Community Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="200"
                    src="/Com-3.jpg"
                    width="300"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Grateful for the Responsive Team</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "The team behind this app is amazing. They responded quickly to my report and kept me informed
                      every step of the way. I'm so grateful for their support."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4 mt-8">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Submit Your Story
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                View All Stories
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
                  Report a Crime
                </div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">Help Make Our Community Safer</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Use our decentralized crime reporting system to report incidents and help keep our community safe.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4 mt-8">
              <form>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter the location" type="text" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe the incident" rows={4} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="photo">Upload Photo</Label>
                  <Input id="photo" type="file" />
                </div>
                <div className="flex justify-center mt-3">
                  <Button variant= "outline" type="submit">Submit Report</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
                  Community Discussion
                </div>
                <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-5xl">Join the Conversation</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Share your thoughts, ask questions, and connect with others in our community.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    I'm so grateful for this app. I was able to report a suspicious activity in my neighborhood and the
                    police responded quickly. I feel much safer now.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <ThumbsUpIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ThumbsDownIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ContactIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <div className="font-medium">John Smith</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">1 day ago</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    I'm so impressed with how quickly the team responded to my report. They kept me informed every step
                    of the way and helped resolve the issue. This app is a game-changer for our community.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <ThumbsUpIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ThumbsDownIcon className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <ContactIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}




