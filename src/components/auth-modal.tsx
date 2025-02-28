"use client"

import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface AuthModalProps {
  onAuth: () => void
}

export function AuthModal({ onAuth }: AuthModalProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Connect Your Twitter Account</CardTitle>
        <CardDescription className="text-center">Authorize access to analyze your Twitter performance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-4 bg-muted/20">
          <h3 className="font-medium mb-2">Why connect your Twitter account?</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="rounded-full bg-primary text-primary-foreground h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                1
              </span>
              <span>Analyze your post performance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="rounded-full bg-primary text-primary-foreground h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                2
              </span>
              <span>Get insights about your audience</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="rounded-full bg-primary text-primary-foreground h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                3
              </span>
              <span>Receive AI-powered content suggestions</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onAuth}>
          <Twitter className="mr-2 h-4 w-4" />
          Authorize Twitter
        </Button>
      </CardFooter>
    </Card>
  )
}

