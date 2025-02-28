import type {
  TweetType,
  PostType,
  TopicSuggestionType,
  ContentIdeaType,
  OptimizationTipType,
  TopFanType,
  TopPostType,
  TrendType,
  HashtagType,
} from "@/lib/types"

export const recentTweets: TweetType[] = [
  {
    id: "1",
    author: "InfluAgent Official",
    handle: "influagent_official",
    authorImage: "/placeholder.svg?height=40&width=40",
    content: "Just launched our new product! Check it out at example.com #newproduct #tech",
    date: "2 hours ago",
    likes: 42,
    retweets: 12,
    replies: 5,
  },
  {
    id: "2",
    author: "InfluAgent Official",
    handle: "influagent_official",
    authorImage: "/placeholder.svg?height=40&width=40",
    content: "Excited to announce that we've reached 10,000 users! Thanks to everyone for your support. #milestone",
    date: "1 day ago",
    likes: 128,
    retweets: 34,
    replies: 21,
  },
  {
    id: "3",
    author: "InfluAgent Official",
    handle: "influagent_official",
    authorImage: "/placeholder.svg?height=40&width=40",
    content: "What features would you like to see in our next update? Reply with your suggestions!",
    date: "3 days ago",
    likes: 56,
    retweets: 8,
    replies: 42,
  },
]

export const mockPosts: PostType[] = [
  {
    id: "1",
    content: "Just launched our new product! Check it out at example.com #newproduct #tech",
    date: "May 15, 2023",
    time: "14:30",
    type: "text",
    engagementScore: 85,
    engagementLevel: "high",
    likes: 142,
    retweets: 38,
    replies: 24,
  },
  {
    id: "2",
    content: "Excited to announce that we've reached 10,000 users! Thanks to everyone for your support. #milestone",
    date: "May 12, 2023",
    time: "10:15",
    type: "image",
    engagementScore: 92,
    engagementLevel: "high",
    likes: 256,
    retweets: 78,
    replies: 42,
  },
  {
    id: "3",
    content: "What features would you like to see in our next update? Reply with your suggestions!",
    date: "May 10, 2023",
    time: "16:45",
    type: "text",
    engagementScore: 78,
    engagementLevel: "medium",
    likes: 98,
    retweets: 12,
    replies: 64,
  },
  {
    id: "4",
    content: "Check out our latest video tutorial on how to use our product efficiently.",
    date: "May 8, 2023",
    time: "09:30",
    type: "video",
    engagementScore: 88,
    engagementLevel: "high",
    likes: 186,
    retweets: 45,
    replies: 32,
  },
  {
    id: "5",
    content: "Interesting article about the future of our industry: example.com/article",
    date: "May 5, 2023",
    time: "11:20",
    type: "link",
    engagementScore: 62,
    engagementLevel: "medium",
    likes: 76,
    retweets: 28,
    replies: 15,
  },
  {
    id: "6",
    content: "We're hiring! Join our team and help us build amazing products.",
    date: "May 3, 2023",
    time: "13:45",
    type: "text",
    engagementScore: 45,
    engagementLevel: "low",
    likes: 42,
    retweets: 18,
    replies: 8,
  },
]

export const topicSuggestions: TopicSuggestionType[] = [
  {
    title: "Industry Trends 2023",
    description: "Share insights about upcoming trends in your industry",
    tags: ["trends", "industry", "future"],
    trendScore: 9,
    relevanceScore: 8,
  },
  {
    title: "Product Tutorial Series",
    description: "Create a series of short tutorials for your product",
    tags: ["tutorial", "howto", "product"],
    trendScore: 7,
    relevanceScore: 9,
  },
  {
    title: "Customer Success Stories",
    description: "Highlight how customers are succeeding with your product",
    tags: ["success", "customers", "testimonial"],
    trendScore: 8,
    relevanceScore: 9,
  },
  {
    title: "Behind the Scenes",
    description: "Show your audience how your team works",
    tags: ["behindthescenes", "team", "company"],
    trendScore: 6,
    relevanceScore: 7,
  },
  {
    title: "Industry News Roundup",
    description: "Weekly summary of important news in your industry",
    tags: ["news", "weekly", "roundup"],
    trendScore: 8,
    relevanceScore: 8,
  },
  {
    title: "Q&A with Experts",
    description: "Interview industry experts about relevant topics",
    tags: ["interview", "expert", "QandA"],
    trendScore: 7,
    relevanceScore: 8,
  },
]

export const contentIdeas: ContentIdeaType[] = [
  {
    title: "Product Feature Highlight",
    type: "Educational Content",
    content:
      "Did you know our product can help you save up to 5 hours per week? Here's how our automated reporting feature works to save you time and reduce errors. #productivity #automation",
    contentType: "Text with Image",
    engagementPrediction: 82,
  },
  {
    title: "Industry Insight",
    type: "Thought Leadership",
    content:
      "The future of our industry is being shaped by three key trends: AI integration, sustainability, and personalized experiences. Here's how we're adapting to stay ahead of the curve. #futuretrends #innovation",
    contentType: "Text Only",
    engagementPrediction: 75,
  },
  {
    title: "Customer Spotlight",
    type: "Social Proof",
    content:
      "We're thrilled to spotlight @CustomerName who increased their productivity by 35% using our platform! Check out their full story on our blog (link in bio). #customersuccess #casestudy",
    contentType: "Text with Link",
    engagementPrediction: 88,
  },
  {
    title: "Quick Tip Tuesday",
    type: "Educational Content",
    content:
      "Quick Tip Tuesday: Boost your workflow efficiency by using keyboard shortcuts! Press Ctrl+Shift+P to access our power menu with all commands in one place. What's your favorite shortcut? #quicktip #productivity",
    contentType: "Text with Image",
    engagementPrediction: 79,
  },
]

export const optimizationTips: OptimizationTipType[] = [
  {
    title: "Use more visual content",
    description: "Posts with images or videos get 40% more engagement than text-only posts",
    examples: ["Product demos", "Infographics", "Behind-the-scenes photos"],
  },
  {
    title: "Post at optimal times",
    description: "Your audience is most active between 12-2pm on weekdays",
    examples: ["Schedule posts for 1pm", "Avoid weekends", "Test different times"],
  },
  {
    title: "Increase hashtag effectiveness",
    description: "Use 3-5 relevant hashtags per post for maximum reach",
    examples: ["#industrynews", "#productupdate", "#techinnovation"],
  },
  {
    title: "Ask questions to boost engagement",
    description: "Posts that ask questions get 2x more comments",
    examples: ["What feature do you want next?", "How do you use our product?", "What's your biggest challenge?"],
  },
]

export const topFans: TopFanType[] = [
  {
    name: "Sarah Johnson",
    handle: "sarahj",
    avatar: "/placeholder.svg?height=40&width=40",
    engagementCount: 87,
  },
  {
    name: "Michael Chen",
    handle: "mikechen",
    avatar: "/placeholder.svg?height=40&width=40",
    engagementCount: 64,
  },
  {
    name: "Emily Rodriguez",
    handle: "emilyr",
    avatar: "/placeholder.svg?height=40&width=40",
    engagementCount: 52,
  },
  {
    name: "David Kim",
    handle: "davidk",
    avatar: "/placeholder.svg?height=40&width=40",
    engagementCount: 45,
  },
  {
    name: "Jessica Lee",
    handle: "jesslee",
    avatar: "/placeholder.svg?height=40&width=40",
    engagementCount: 38,
  },
]

export const topPosts: TopPostType[] = [
  {
    content: "Excited to announce that we've reached 10,000 users! Thanks to everyone for your support. #milestone",
    date: "May 12, 2023",
    totalEngagement: 376,
    likes: 256,
    retweets: 78,
    replies: 42,
  },
  {
    content: "Check out our latest video tutorial on how to use our product efficiently.",
    date: "May 8, 2023",
    totalEngagement: 263,
    likes: 186,
    retweets: 45,
    replies: 32,
  },
  {
    content: "Just launched our new product! Check it out at example.com #newproduct #tech",
    date: "May 15, 2023",
    totalEngagement: 204,
    likes: 142,
    retweets: 38,
    replies: 24,
  },
  {
    content: "What features would you like to see in our next update? Reply with your suggestions!",
    date: "May 10, 2023",
    totalEngagement: 174,
    likes: 98,
    retweets: 12,
    replies: 64,
  },
]

export const trends: TrendType[] = [
  {
    name: "#TechInnovation",
    tweetCount: 45600,
    isRising: true,
  },
  {
    name: "#AITrends",
    tweetCount: 32400,
    isRising: true,
  },
  {
    name: "#ProductivityHacks",
    tweetCount: 28900,
    isRising: false,
  },
  {
    name: "#RemoteWork",
    tweetCount: 24500,
    isRising: true,
  },
  {
    name: "#DigitalTransformation",
    tweetCount: 21300,
    isRising: false,
  },
]

export const hashtags: HashtagType[] = [
  {
    name: "TechInnovation",
    count: 45600,
    growth: 24,
  },
  {
    name: "AITrends",
    count: 32400,
    growth: 32,
  },
  {
    name: "ProductivityHacks",
    count: 28900,
    growth: 18,
  },
  {
    name: "RemoteWork",
    count: 24500,
    growth: 15,
  },
  {
    name: "DigitalTransformation",
    count: 21300,
    growth: 12,
  },
  {
    name: "FutureOfWork",
    count: 19800,
    growth: 21,
  },
]

export const locations = {
  countries: [
    {
      name: "United States",
      count: 45600,
      percentage: 38,
    },
    {
      name: "United Kingdom",
      count: 24300,
      percentage: 20,
    },
    {
      name: "Canada",
      count: 18500,
      percentage: 15,
    },
    {
      name: "Australia",
      count: 12400,
      percentage: 10,
    },
    {
      name: "Germany",
      count: 9800,
      percentage: 8,
    },
  ],
  cities: [
    {
      name: "New York, USA",
      count: 12400,
      percentage: 10,
    },
    {
      name: "London, UK",
      count: 10800,
      percentage: 9,
    },
    {
      name: "San Francisco, USA",
      count: 9600,
      percentage: 8,
    },
    {
      name: "Toronto, Canada",
      count: 7200,
      percentage: 6,
    },
    {
      name: "Sydney, Australia",
      count: 6400,
      percentage: 5,
    },
  ],
}

