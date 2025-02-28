"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { LineChart } from "@/components/ui/charts"
import { useTrends } from "@/lib/hooks/use-trends"

export function TrendAnalysis() {
  const { metrics, trends, hashtags } = useTrends()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Trend Analysis</h2>
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
            <CardTitle className="text-sm font-medium">Follower Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.followerGrowthRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{metrics.followerGrowthChange}%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Engagement Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.engagementGrowthRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{metrics.engagementGrowthChange}%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Impressions Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.impressionsGrowthRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-red-500">-{metrics.impressionsGrowthChange}%</span> from previous period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Daily Trends</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Trends</TabsTrigger>
          <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Metrics</CardTitle>
              <CardDescription>Track your daily performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Metrics</CardTitle>
              <CardDescription>Track your weekly performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Metrics</CardTitle>
              <CardDescription>Track your monthly performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Twitter Trends</CardTitle>
            <CardDescription>Popular trends on Twitter right now</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {trends.map((trend, index) => (
                <li key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">{index + 1}</span>
                    <div>
                      <div className="font-medium">{trend.name}</div>
                      <div className="text-xs text-muted-foreground">{trend.tweetCount.toLocaleString()} tweets</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {trend.isRising && (
                      <Badge variant="outline" className="text-green-500 gap-1">
                        <TrendingUp className="h-3 w-3" /> Rising
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm" className="gap-1">
                      Explore <ArrowUpRight className="h-3 w-3" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Hashtags</CardTitle>
            <CardDescription>Trending hashtags in your niche</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {hashtags.map((hashtag, index) => (
                <div key={index} className="border rounded-lg p-3 flex flex-col">
                  <div className="font-medium">#{hashtag.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{hashtag.count.toLocaleString()} tweets</div>
                  <div className="text-xs text-green-500 flex items-center gap-1 mt-2">
                    <TrendingUp className="h-3 w-3" /> {hashtag.growth}% this week
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

