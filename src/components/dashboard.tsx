"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Overview } from "@/components/overview"
import { PostsAnalysis } from "@/components/posts-analysis"
import { FanDistribution } from "@/components/fan-distribution"
import { EngagementMetrics } from "@/components/engagement-metrics"
import { TrendAnalysis } from "@/components/trend-analysis"
import { ContentSuggestions } from "@/components/content-suggestions"
import { Settings } from "@/components/settings"
import { AuthModal } from "@/components/auth-modal"
import { useTwitterAuth } from "@/lib/hooks/use-twitter-auth"

export function Dashboard() {
  const { isAuthorized, authorizeTwitter, userData } = useTwitterAuth()
  const [activeView, setActiveView] = useState("overview")

  const renderActiveView = () => {
    if (!isAuthorized) {
      return (
        <div className="flex items-center justify-center h-full">
          <AuthModal onAuth={authorizeTwitter} />
        </div>
      )
    }

    switch (activeView) {
      case "overview":
        return <Overview />
      case "posts":
        return <PostsAnalysis />
      case "fans":
        return <FanDistribution />
      case "engagement":
        return <EngagementMetrics />
      case "trends":
        return <TrendAnalysis />
      case "suggestions":
        return <ContentSuggestions />
      case "settings":
        return <Settings />
      default:
        return <Overview />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar
          activeView={activeView}
          setActiveView={setActiveView}
          isAuthorized={isAuthorized}
          userData={userData}
        />
        <DashboardShell>{renderActiveView()}</DashboardShell>
      </div>
    </SidebarProvider>
  )
}

