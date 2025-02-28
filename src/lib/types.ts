export interface UserType {
  id: string
  name: string
  handle: string
  email: string
  phone: string
  bio: string
  profileImage: string
}

export interface PostType {
  id: string
  content: string
  date: string
  time: string
  type: "text" | "image" | "video" | "link"
  engagementScore: number
  engagementLevel: "high" | "medium" | "low"
  likes: number
  retweets: number
  replies: number
}

export interface TweetType {
  id: string
  author: string
  handle: string
  authorImage: string
  content: string
  date: string
  likes: number
  retweets: number
  replies: number
}

export interface TopicSuggestionType {
  title: string
  description: string
  tags: string[]
  trendScore: number
  relevanceScore: number
}

export interface ContentIdeaType {
  title: string
  type: string
  content: string
  contentType: string
  engagementPrediction: number
}

export interface OptimizationTipType {
  title: string
  description: string
  examples: string[]
}

export interface TopFanType {
  name: string
  handle: string
  avatar: string
  engagementCount: number
}

export interface TopPostType {
  content: string
  date: string
  totalEngagement: number
  likes: number
  retweets: number
  replies: number
}

export interface TrendType {
  name: string
  tweetCount: number
  isRising: boolean
}

export interface HashtagType {
  name: string
  count: number
  growth: number
}

export interface LocationType {
  name: string
  count: number
  percentage: number
}

