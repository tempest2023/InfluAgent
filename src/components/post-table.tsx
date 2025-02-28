import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, Image, LineChart, MessageCircle, Repeat2, ThumbsUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { PostType } from "@/lib/types"

interface PostTableProps {
  posts: PostType[]
}

export function PostTable({ posts }: PostTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Content</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Engagement</TableHead>
          <TableHead>Metrics</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell className="max-w-[300px]">
              <div className="font-medium truncate">{post.content}</div>
            </TableCell>
            <TableCell>
              <div className="text-sm">{post.date}</div>
              <div className="text-xs text-muted-foreground">{post.time}</div>
            </TableCell>
            <TableCell>
              {post.type === "text" && <Badge variant="outline">Text</Badge>}
              {post.type === "image" && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <Image className="h-3 w-3" />
                  Image
                </Badge>
              )}
              {post.type === "video" && <Badge variant="outline">Video</Badge>}
              {post.type === "link" && <Badge variant="outline">Link</Badge>}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={post.engagementScore} className="h-2 w-[100px]" />
                <span className="text-sm">{post.engagementScore}%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {post.engagementLevel === "high" && (
                  <span className="text-green-500 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> High engagement
                  </span>
                )}
                {post.engagementLevel === "medium" && (
                  <span className="text-yellow-500 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Medium engagement
                  </span>
                )}
                {post.engagementLevel === "low" && (
                  <span className="text-red-500 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Low engagement
                  </span>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Repeat2 className="h-3 w-3" />
                  <span>{post.retweets}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{post.replies}</span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <LineChart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

