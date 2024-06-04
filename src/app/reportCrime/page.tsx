
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function c1() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      <div className=" bg-white container mx-auto my-8 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Report a Crime</CardTitle>
            <CardDescription>Anonymously report crimes in your community to help keep everyone safe.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter location" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type of Incident</Label>
                  <Select id="type">
                    <SelectTrigger>
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theft">Theft</SelectItem>
                      <SelectItem value="assault">Assault</SelectItem>
                      <SelectItem value="vandalism">Vandalism</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea className="min-h-[100px]" id="description" placeholder="Provide details about the incident" />
              </div>
              <Button className="w-full" type="submit">
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Crime Alerts</CardTitle>
            <CardDescription>Receive real-time alerts about incidents happening near you.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Theft Reported</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2 blocks away, 10 minutes ago</p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Assault Incident</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">5 blocks away, 30 minutes ago</p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Vandalism Reported</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1 mile away, 1 hour ago</p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Community Forum</CardTitle>
            <CardDescription>Discuss safety concerns and share information with your neighbors.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Neighborhood Watch</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Discuss ways to improve community safety.</p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Suspicious Activity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Share information about recent incidents.</p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Crime Prevention Tips</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn how to protect your home and property.
                  </p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
