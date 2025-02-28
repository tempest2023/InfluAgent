"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Download, Search, SlidersHorizontal } from "lucide-react"
import { usePostAnalytics } from "@/lib/hooks/use-post-analytics"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, HeatMapChart, LineChart } from "@/components/ui/charts"
import { PostTable } from "@/components/post-table"

export function PostsAnalysis() {
  const { posts, metrics } = usePostAnalytics()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Posts Analysis</h2>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <ChevronDown className="h-4 w-4" />
                Last 30 Days
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
              <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
              <DropdownMenuItem>Last Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.avgEngagement}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{metrics.engagementGrowth}%</span> from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Performing Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.bestPostEngagement} engagements</div>
            <p className="text-xs text-muted-foreground mt-1">Posted on {metrics.bestPostDate}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalInteractions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{metrics.interactionsGrowth}%</span> from previous period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="timing">Posting Times</TabsTrigger>
          <TabsTrigger value="content">Content Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Post Performance</CardTitle>
              <CardDescription>Engagement metrics for each post over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <LineChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="timing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Best Times to Post</CardTitle>
              <CardDescription>Heatmap showing engagement by day and time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <HeatMapChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Type Performance</CardTitle>
              <CardDescription>Engagement by content type (text, image, video, link)</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart className="h-full w-full" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Posts</CardTitle>
              <CardDescription>Complete list of your posts with metrics</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search posts..." className="pl-8 w-[250px]" />
              </div>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="rounded-sm">
              All Posts
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              High Engagement
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              Low Engagement
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              Text Only
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              With Media
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <PostTable posts={posts} />
        </CardContent>
      </Card>
    </div>
  )
}

