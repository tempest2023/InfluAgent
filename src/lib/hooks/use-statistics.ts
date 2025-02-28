"use client"

import { useState, useEffect } from "react"

interface Statistics {
  followers: number
  newFollowers: number
  following: number
  newFollowing: number
  mutualFriends: number
  mutualFriendsPercentage: number
  totalPosts: number
  newPosts: number
  recentPosts: {
    content: string
    date: string
    likes: number
    comments: number
    reposts: number
  }[]
  topPosts: {
    author: string
    authorImage: string
    content: string
    likes: number
    comments: number
    reposts: number
    bookmarks: number
  }[]
}

export function useStatistics() {
  const [statistics, setStatistics] = useState<Statistics>({
    followers: 12458,
    newFollowers: 342,
    following: 1024,
    newFollowing: 56,
    mutualFriends: 578,
    mutualFriendsPercentage: 4.6,
    totalPosts: 287,
    newPosts: 12,
    recentPosts: [
      {
        content: "Just launched our new product! Check it out at example.com #newproduct #tech",
        date: "2023-05-15",
        likes: 142,
        comments: 38,
        reposts: 24,
      },
      {
        content: "Excited to announce that we've reached 10,000 users! Thanks to everyone for your support. #milestone",
        date: "2023-05-12",
        likes: 256,
        comments: 78,
        reposts: 42,
      },
      {
        content: "What features would you like to see in our next update? Reply with your suggestions!",
        date: "2023-05-10",
        likes: 98,
        comments: 64,
        reposts: 12,
      },
      {
        content: "Check out our latest video tutorial on how to use our product efficiently.",
        date: "2023-05-08",
        likes: 186,
        comments: 45,
        reposts: 32,
      },
      {
        content: "Interesting article about the future of our industry: example.com/article",
        date: "2023-05-05",
        likes: 76,
        comments: 28,
        reposts: 15,
      },
    ],
    topPosts: [
      {
        author: "InfluAgent Official",
        authorImage: "/placeholder.svg?height=36&width=36",
        content: "Excited to announce that we've reached 10,000 users! Thanks to everyone for your support. #milestone",
        likes: 256,
        comments: 78,
        reposts: 42,
        bookmarks: 15,
      },
      {
        author: "InfluAgent Official",
        authorImage: "/placeholder.svg?height=36&width=36",
        content: "Check out our latest video tutorial on how to use our product efficiently.",
        likes: 186,
        comments: 45,
        reposts: 32,
        bookmarks: 12,
      },
      {
        author: "InfluAgent Official",
        authorImage: "/placeholder.svg?height=36&width=36",
        content: "Just launched our new product! Check it out at example.com #newproduct #tech",
        likes: 142,
        comments: 38,
        reposts: 24,
        bookmarks: 8,
      },
      {
        author: "InfluAgent Official",
        authorImage: "/placeholder.svg?height=36&width=36",
        content: "What features would you like to see in our next update? Reply with your suggestions!",
        likes: 98,
        comments: 64,
        reposts: 12,
        bookmarks: 5,
      },
      {
        author: "InfluAgent Official",
        authorImage: "/placeholder.svg?height=36&width=36",
        content: "Interesting article about the future of our industry: example.com/article",
        likes: 76,
        comments: 28,
        reposts: 15,
        bookmarks: 7,
      },
    ],
  })

  useEffect(() => {
    // Mock API call to fetch statistics
    // In a real app, this would be an API call
  }, [])

  return {
    statistics,
  }
}

