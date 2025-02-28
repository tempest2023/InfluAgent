"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "@/components/ui/charts"
import { useStatistics } from "@/lib/hooks/use-statistics"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Download, MessageCircle, Repeat, Heart, Bookmark } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function Overview() {
  const { statistics } = useStatistics()
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.followers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{statistics.newFollowers}</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Following</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.following.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{statistics.newFollowing}</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mutual Friends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.mutualFriends.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-blue-500">{statistics.mutualFriendsPercentage}%</span> of total connections
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.totalPosts}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+{statistics.newPosts}</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Engagement Overview</CardTitle>
          <CardDescription>Your post engagement over the last 30 days</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <LineChart className="h-full w-full" />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Likes Growth</CardTitle>
            <CardDescription>Increase in likes over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[200px]">
            <BarChart className="h-full w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comments Distribution</CardTitle>
            <CardDescription>Breakdown of comment types</CardDescription>
          </CardHeader>
          <CardContent className="h-[200px]">
            <PieChart className="h-full w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Repost Trends</CardTitle>
            <CardDescription>Repost patterns over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[200px]">
            <LineChart className="h-full w-full" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Post Performance</CardTitle>
          <CardDescription>Engagement metrics for your latest posts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Likes</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Reposts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {statistics.recentPosts.map((post, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{post.content.substring(0, 50)}...</TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>{post.likes}</TableCell>
                  <TableCell>{post.comments}</TableCell>
                  <TableCell>{post.reposts}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top 5 Popular Posts</CardTitle>
          <CardDescription>Your most engaging content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {statistics.topPosts.map((post, index) => (
              <div key={index} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.content.substring(0, 100)}...</p>
                </div>
                <div className="ml-auto font-medium">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Heart className="mr-1 h-3 w-3" /> {post.likes}
                    </span>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <MessageCircle className="mr-1 h-3 w-3" /> {post.comments}
                    </span>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Repeat className="mr-1 h-3 w-3" /> {post.reposts}
                    </span>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Bookmark className="mr-1 h-3 w-3" /> {post.bookmarks}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

