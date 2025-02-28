"use client"

import { useState, useEffect } from "react"
import type { UserType } from "@/lib/types"

interface Preferences {
  theme: string
  language: string
  dateFormat: string
  timeFormat: string
  showMetrics: boolean
  showRecentPosts: boolean
  showTrending: boolean
  autoRefresh: boolean
  defaultView: string
  lastUpdated: string
  aiSettings: {
    enabled: boolean
    tone: string
    contentTypes: string[]
    contentLength: string
    focusTopics: string[]
  }
}

interface Notifications {
  performanceAlerts: boolean
  trendingTopics: boolean
  contentSuggestions: boolean
  followerMilestones: boolean
  emailNotifications: boolean
  browserNotifications: boolean
  mobilePush: boolean
  frequency: string
  unreadCount: number
}

export function useSettings() {
  const [user, setUser] = useState<UserType>({
    id: "123456789",
    name: "InfluAgent Official",
    handle: "InfluAgent Official",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Product enthusiast and tech blogger. Sharing insights about the latest trends and innovations.",
    profileImage: "/placeholder.svg?height=100&width=100",
  })

  const [preferences, setPreferences] = useState<Preferences>({
    theme: "light",
    language: "en",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
    showMetrics: true,
    showRecentPosts: true,
    showTrending: true,
    autoRefresh: true,
    defaultView: "overview",
    lastUpdated: "May 20, 2023",
    aiSettings: {
      enabled: true,
      tone: "professional",
      contentTypes: ["text", "images"],
      contentLength: "medium",
      focusTopics: ["Technology", "Innovation", "Product Updates", "Industry News"],
    },
  })

  const [notifications, setNotifications] = useState<Notifications>({
    performanceAlerts: true,
    trendingTopics: true,
    contentSuggestions: true,
    followerMilestones: true,
    emailNotifications: true,
    browserNotifications: false,
    mobilePush: true,
    frequency: "daily",
    unreadCount: 5,
  })

  useEffect(() => {
    // Mock API call to fetch settings
    // In a real app, this would be an API call
  }, [])

  return {
    user,
    preferences,
    notifications,
  }
}

