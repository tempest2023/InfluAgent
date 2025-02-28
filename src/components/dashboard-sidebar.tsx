"use client"

import { ActivitySquare, Globe, Home, MessageSquareText, SettingsIcon, TrendingUp, Twitter, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import type { UserType } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
  isAuthorized: boolean
  userData: UserType | null
}

export function DashboardSidebar({ activeView, setActiveView, isAuthorized, userData }: DashboardSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2">
          <Twitter className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Influ Agent Dashboard</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {isAuthorized && userData ? (
          <>
            <div className="p-4 flex items-center gap-3">
              <Avatar>
                <AvatarImage src={userData.profileImage} />
                <AvatarFallback>{userData.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{userData.name}</p>
                <p className="text-sm text-muted-foreground">@{userData.handle}</p>
              </div>
            </div>
            <SidebarSeparator />
          </>
        ) : null}

        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeView === "overview"} onClick={() => setActiveView("overview")}>
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeView === "posts"} onClick={() => setActiveView("posts")}>
                  <MessageSquareText className="h-4 w-4" />
                  <span>Posts Analysis</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeView === "fans"} onClick={() => setActiveView("fans")}>
                  <Users className="h-4 w-4" />
                  <span>Fan Distribution</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeView === "engagement"} onClick={() => setActiveView("engagement")}>
                  <ActivitySquare className="h-4 w-4" />
                  <span>Engagement Metrics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeView === "trends"} onClick={() => setActiveView("trends")}>
                  <TrendingUp className="h-4 w-4" />
                  <span>Trend Analysis</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Optimization</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeView === "suggestions"} onClick={() => setActiveView("suggestions")}>
                  <Globe className="h-4 w-4" />
                  <span>Content Suggestions</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeView === "settings"} onClick={() => setActiveView("settings")}>
              <SettingsIcon className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

