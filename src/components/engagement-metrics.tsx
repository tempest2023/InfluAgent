"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/charts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useEngagementMetrics } from "@/lib/hooks/use-engagement-metrics"

export function EngagementMetrics() {
  const { metrics, topPosts } = useEngagementMetrics()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Engagement Metrics</h2>
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

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.engagementRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{metrics.engagementGrowth}%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.likes.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{metrics.likeGrowth}%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Retweets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.retweets.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{metrics.retweetGrowth}%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Replies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.replies.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-red-500">-{metrics.replyDecline}%</span> from previous period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="byTime">By Time</TabsTrigger>
          <TabsTrigger value="byType">By Content Type</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Metrics Over Time</CardTitle>
              <CardDescription>Likes, retweets, and replies over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="byTime" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Engagement by Day of Week</CardTitle>
                <CardDescription>When your audience engages the most</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart className="h-full w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engagement by Time of Day</CardTitle>
                <CardDescription>Peak hours for engagement</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart className="h-full w-full" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="byType" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Engagement by Content Type</CardTitle>
                <CardDescription>Which content formats perform best</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <PieChart className="h-full w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engagement by Topic</CardTitle>
                <CardDescription>Which topics resonate with your audience</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <BarChart className="h-full w-full" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts</CardTitle>
          <CardDescription>Your posts with the highest engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {topPosts.map((post, index) => (
              <li key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div>
                  <div className="font-medium truncate max-w-[400px]">{post.content}</div>
                  <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <div className="font-medium">{post.totalEngagement.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Total engagements</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-xs">
                      <div>{post.likes.toLocaleString()}</div>
                      <div className="text-muted-foreground">Likes</div>
                    </div>
                    <div className="text-xs">
                      <div>{post.retweets.toLocaleString()}</div>
                      <div className="text-muted-foreground">Retweets</div>
                    </div>
                    <div className="text-xs">
                      <div>{post.replies.toLocaleString()}</div>
                      <div className="text-muted-foreground">Replies</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

