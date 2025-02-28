"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { BarChart, GeoMapChart, PieChart } from "@/components/ui/charts"
import { Download } from "lucide-react"
import { useFanAnalytics } from "@/lib/hooks/use-fan-analytics"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FanDistribution() {
  const { demographics, locations, topFans } = useFanAnalytics()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Fan Distribution</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 3 Months</SelectItem>
              <SelectItem value="365days">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{demographics.totalFollowers.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{demographics.activeFollowers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {demographics.activeFollowersPercentage}% of total followers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{demographics.newFollowers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{demographics.followerGrowth}%</span> from previous period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="demographics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="geography">Geography</TabsTrigger>
          <TabsTrigger value="interests">Interests</TabsTrigger>
        </TabsList>
        <TabsContent value="demographics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Age breakdown of your followers</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart className="h-full w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gender Distribution</CardTitle>
                <CardDescription>Gender breakdown of your followers</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <PieChart className="h-full w-full" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="geography" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>Where your followers are located</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <GeoMapChart className="h-full w-full" />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Countries</CardTitle>
                <CardDescription>Countries with most followers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {locations.countries.map((country, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{index + 1}.</span>
                        <span>{country.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">{country.count.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{country.percentage}%</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Cities</CardTitle>
                <CardDescription>Cities with most followers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {locations.cities.map((city, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{index + 1}.</span>
                        <span>{city.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">{city.count.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{city.percentage}%</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="interests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Interests</CardTitle>
              <CardDescription>Common interests among your followers</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Top Engaged Followers</CardTitle>
          <CardDescription>Followers who engage with your content the most</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {topFans.map((fan, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">{index + 1}.</span>
                  <div className="flex items-center gap-2">
                    <img src={fan.avatar || "/placeholder.svg"} alt={fan.name} className="h-8 w-8 rounded-full" />
                    <div>
                      <div className="font-medium">{fan.name}</div>
                      <div className="text-xs text-muted-foreground">@{fan.handle}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <span className="font-medium">{fan.engagementCount}</span> engagements
                  </div>
                  <Button variant="ghost" size="sm">
                    View Profile
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

