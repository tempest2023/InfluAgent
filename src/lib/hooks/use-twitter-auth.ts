"use client"

import { useState, useEffect } from "react"
import type { UserType } from "@/lib/types"

export function useTwitterAuth() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [userData, setUserData] = useState<UserType | null>(null)

  useEffect(() => {
    // Check if user was previously authorized
    const storedAuth = localStorage.getItem("twitter-auth")
    if (storedAuth) {
      setIsAuthorized(true)
      setUserData(JSON.parse(storedAuth))
    }
  }, [])

  const authorizeTwitter = () => {
    // Mock authorization process
    setTimeout(() => {
      const mockUser: UserType = {
        id: "123456789",
        name: "InfluAgent Official",
        handle: "InfluAgent Official",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        bio: "Product enthusiast and tech blogger. Sharing insights about the latest trends and innovations.",
        profileImage: "/placeholder.svg?height=100&width=100",
      }

      setIsAuthorized(true)
      setUserData(mockUser)
      localStorage.setItem("twitter-auth", JSON.stringify(mockUser))
    }, 1500)
  }

  return {
    isAuthorized,
    authorizeTwitter,
    userData,
  }
}

