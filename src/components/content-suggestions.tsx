"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Bookmark,
  Calendar,
  Clock,
  DownloadCloud,
  FileBarChart,
  FileText,
  Flame,
  MoreHorizontal,
  Plus,
  RefreshCcw,
  Share2,
  Star,
  Zap,
} from "lucide-react"
import { useContentSuggestions } from "@/lib/hooks/use-content-suggestions"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ContentSuggestions() {
  const { topicSuggestions, contentIdeas, optimizationTips } = useContentSuggestions()
  const [generating, setGenerating] = useState(false)

  const handleGenerateMore = () => {
    setGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Content Suggestions</h2>
        <Button disabled={generating} onClick={handleGenerateMore} className="gap-2">
          {generating ? (
            <>
              <RefreshCcw className="h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              Generate More Ideas
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Content Strategy</CardTitle>
          <CardDescription>
            Customized content recommendations based on your audience and trending topics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-muted/20">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <FileBarChart className="h-4 w-4" />
                Analysis Summary
              </h3>
              <p className="text-sm">
                Based on your recent performance, your audience engages most with content about technology trends and
                industry news. Posts with images get 43% more engagement than text-only posts. The best times to post
                are weekdays between 12-2pm.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-500" />
                  Top Engagement Drivers
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Posts with images</span>
                    <span className="font-medium">+43% engagement</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Tech industry topics</span>
                    <span className="font-medium">+38% engagement</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Questions to audience</span>
                    <span className="font-medium">+27% engagement</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  Optimal Posting Times
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Weekdays 12-2pm</span>
                    <Progress value={95} className="w-20 h-2" />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Weekdays 5-7pm</span>
                    <Progress value={85} className="w-20 h-2" />
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Sundays 10am-12pm</span>
                    <Progress value={70} className="w-20 h-2" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="topics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="topics">Topic Suggestions</TabsTrigger>
          <TabsTrigger value="content">Content Ideas</TabsTrigger>
          <TabsTrigger value="optimization">Optimization Tips</TabsTrigger>
        </TabsList>
        <TabsContent value="topics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {topicSuggestions.map((topic, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{topic.title}</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Bookmark className="mr-2 h-4 w-4" />
                          Save for later
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule post
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          Share idea
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 pt-0">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {topic.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center mt-2 gap-4">
                    <div className="flex items-center gap-1">
                      <Flame className="h-3 w-3 text-orange-500" />
                      Trend score: {topic.trendScore}/10
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      Relevance: {topic.relevanceScore}/10
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-2">
                  <Button variant="outline" className="w-full">
                    Generate Post
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="content" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {contentIdeas.map((idea, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{idea.title}</CardTitle>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription>{idea.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Textarea value={idea.content} className="h-[120px] resize-none text-sm" readOnly />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <FileText className="h-3 w-3" />
                      {idea.contentType}
                    </div>
                    <div className="text-xs flex gap-2">
                      <Badge variant="outline" className="text-green-500">
                        {idea.engagementPrediction}% engagement
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <DownloadCloud className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Plus className="mr-2 h-4 w-4" />
                    Use
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="optimization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Optimization Tips</CardTitle>
              <CardDescription>AI-powered recommendations to improve your content performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {optimizationTips.map((tip, index) => (
                  <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {tip.examples.map((example, exIndex) => (
                            <Badge key={exIndex} variant="outline">
                              {example}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Apply to Posts
                          </Button>
                          <Button variant="ghost" size="sm">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

