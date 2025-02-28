"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSettings } from "@/lib/hooks/use-settings"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Lock, Shield, Laptop, Smartphone, AlertTriangle, BellRing, Clock, CloudCog, Download, Globe, Languages, Save, UserCog } from "lucide-react"

export function Settings() {
  const { user, preferences, notifications } = useSettings()
  const [saved, setSaved] = useState(false)
  
  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>
      
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Manage your account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user.profileImage} />
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">Change Avatar</Button>
                  <p className="text-xs text-muted-foreground">
                    JPG, GIF or PNG. Max size of 800K
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="handle">Twitter Handle</Label>
                  <Input id="handle" value={`@${user.handle}`} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={user.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" value={user.phone} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" value={user.bio} rows={3} />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <UserCog className="h-4 w-4" />
                  <span className="text-sm font-medium">Personal Information</span>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  {saved ? (
                    <>
                      <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      Saved
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>
                Manage your connected social accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#1DA1F2] p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-xs text-muted-foreground">Connected as @{user.handle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Disconnect</Button>
                  <Button variant="outline" size="sm">Refresh</Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#1877F2] p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Facebook</div>
                    <div className="text-xs text-muted-foreground">Not connected</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-xs text-muted-foreground">Not connected</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Preferences</CardTitle>
              <CardDescription>
                Customize your dashboard experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <h3 className="font-medium">Display Settings</h3>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue={preferences.theme}>
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue={preferences.language}>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue={preferences.dateFormat}>
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time-format">Time Format</Label>
                    <Select defaultValue={preferences.timeFormat}>
                      <SelectTrigger id="time-format">
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12-hour</SelectItem>
                        <SelectItem value="24h">24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CloudCog className="h-4 w-4" />
                    <h3 className="font-medium">Dashboard Configuration</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-metrics">Show metrics overview on dashboard</Label>
                    <Switch id="show-metrics" checked={preferences.showMetrics} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-recent-posts">Show recent posts on dashboard</Label>
                    <Switch id="show-recent-posts" checked={preferences.showRecentPosts} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-trending">Show trending topics on dashboard</Label>
                    <Switch id="show-trending" checked={preferences.showTrending} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-refresh">Automatically refresh data (every 30 min)</Label>
                    <Switch id="auto-refresh" checked={preferences.autoRefresh} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="default-view">Default Dashboard View</Label>
                  <Select defaultValue={preferences.defaultView}>
                    <SelectTrigger id="default-view">
                      <SelectValue placeholder="Select default view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="overview">Overview</SelectItem>
                      <SelectItem value="posts">Posts Analysis</SelectItem>
                      <SelectItem value="engagement">Engagement Metrics</SelectItem>
                      <SelectItem value="fans">Fan Distribution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Last updated: {preferences.lastUpdated}</span>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  {saved ? (
                    <>
                      <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      Saved
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Preferences
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Configuration</CardTitle>
              <CardDescription>
                Adjust how AI generates content suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable-ai">Enable AI suggestions</Label>
                  <Switch id="enable-ai" checked={preferences.aiSettings.enabled} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ai-tone">Content Tone</Label>
                  <Select defaultValue={preferences.aiSettings.tone}>
                    <SelectTrigger id="ai-tone">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="informative">Informative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="content-types">Focus Content Types</Label>
                    <Select defaultValue={preferences.aiSettings.contentTypes[0]}>
                      <SelectTrigger id="content-types">
                        <SelectValue placeholder="Select content types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text only</SelectItem>
                        <SelectItem value="images">With images</SelectItem>
                        <SelectItem value="videos">With videos</SelectItem>
                        <SelectItem value="links">With links</SelectItem>
                        <SelectItem value="all">All types</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content-length">Content Length</Label>
                    <Select defaultValue={preferences.aiSettings.contentLength}>
                      <SelectTrigger id="content-length">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="focus-topics">Focus Topics</Label>
                  <Textarea 
                    id="focus-topics" 
                    value={preferences.aiSettings.focusTopics.join(", ")}
                    placeholder="Enter topics separated by commas"
                    rows={2}
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter topics you&apos;d like the AI to focus on when generating suggestions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <BellRing className="h-4 w-4" />
                    <h3 className="font-medium">Dashboard Notifications</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="performance-alerts">Performance alerts</Label>
                    <Switch id="performance-alerts" checked={notifications.performanceAlerts} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="trending-topics">Trending topics in your niche</Label>
                    <Switch id="trending-topics" checked={notifications.trendingTopics} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content-suggestions">New content suggestions</Label>
                    <Switch id="content-suggestions" checked={notifications.contentSuggestions} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="follower-milestones">Follower milestones</Label>
                    <Switch id="follower-milestones" checked={notifications.followerMilestones} />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    <h3 className="font-medium">Delivery Channels</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">Email notifications</Label>
                    <Switch id="email-notifications" checked={notifications.emailNotifications} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="browser-notifications">Browser notifications</Label>
                    <Switch id="browser-notifications" checked={notifications.browserNotifications} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="mobile-push">Mobile push notifications</Label>
                    <Switch id="mobile-push" checked={notifications.mobilePush} />
                  </div>
                </div>
                
                <div className="grid gap-6 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="notification-frequency">Notification Frequency</Label>
                    <Select defaultValue={notifications.frequency}>
                      <SelectTrigger id="notification-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="daily">Daily digest</SelectItem>
                        <SelectItem value="weekly">Weekly summary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">
                    You have {notifications.unreadCount} unread notifications
                  </span>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  {saved ? (
                    <>
                      <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      Saved
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Settings
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    <h3 className="font-medium">Password & Authentication</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                    <Switch id="two-factor" checked={false} />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <h3 className="font-medium">Privacy Settings</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="profile-visibility">Make profile public</Label>
                    <Switch id="profile-visibility" checked={true} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-email">Show email to other users</Label>
                    <Switch id="show-email" checked={false} />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="analytics-consent">Allow analytics tracking</Label>
                    <Switch id="analytics-consent" checked={true} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="data-retention">Data Retention Period</Label>
                    <Select defaultValue="1year">
                      <SelectTrigger id="data-retention">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6months">6 months</SelectItem>
                        <SelectItem value="1year">1 year</SelectItem>
                        <SelectItem value="2years">2 years</SelectItem>
                        <SelectItem value="forever">Keep forever</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-muted-foreground">
                    Last security check: 7 days ago
                  </span>
                </div>
                <Button onClick={handleSave} className="gap-2">
                  {saved ? (
                    <>
                      <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      Saved
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Security Settings
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Management</CardTitle>
              <CardDescription>
                Manage your active sessions and devices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-500/10 p-2">
                      <Laptop className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium">Current Device - Chrome</div>
                      <div className="text-xs text-muted-foreground">Last active: Now</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" disabled>
                    Current
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">iPhone 13 - Safari</div>
                      <div className="text-xs text-muted-foreground">Last active: 2 hours ago</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Revoke
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button variant="destructive" size="sm">
                  Sign Out All Devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
              </Tabs>
            </div>
          )
        }

