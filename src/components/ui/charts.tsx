"use client"

import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function LineChart({ className, ...props }: ChartProps) {
  return (
    <div className={cn("w-full h-full flex items-center justify-center relative", className)} {...props}>
      <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="none">
        <path
          d="M0,150 C100,100 150,50 200,80 C250,110 300,150 350,120 C400,90 450,70 500,50"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        <path
          d="M0,200 C100,180 150,160 200,180 C250,200 300,220 350,200 C400,180 450,160 500,140"
          fill="none"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="2"
        />
        <g>
          {[0, 100, 200, 300, 400, 500].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2="300"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="4,6"
            />
          ))}
          {[0, 75, 150, 225, 300].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="500"
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="4,6"
            />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm opacity-0 hover:opacity-100 transition-opacity">
        Chart data is mocked for demonstration
      </div>
    </div>
  )
}

export function BarChart({ className, ...props }: ChartProps) {
  const bars = [
    { height: 150, value: 65 },
    { height: 220, value: 85 },
    { height: 170, value: 72 },
    { height: 120, value: 45 },
    { height: 200, value: 78 },
    { height: 180, value: 70 },
    { height: 250, value: 92 },
  ]

  return (
    <div className={cn("w-full h-full flex items-end justify-between relative p-6", className)} {...props}>
      <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="none" className="absolute inset-0">
        {[0, 75, 150, 225, 300].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="500"
            y2={y}
            stroke="hsl(var(--border))"
            strokeWidth="1"
            strokeDasharray="4,6"
          />
        ))}
      </svg>
      <div className="relative z-10 w-full h-full flex items-end justify-around">
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-2 w-full">
            <div
              className="w-4/5 bg-primary/80 hover:bg-primary transition-colors rounded-t"
              style={{ height: `${(bar.height / 300) * 100}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm opacity-0 hover:opacity-100 transition-opacity">
        Chart data is mocked for demonstration
      </div>
    </div>
  )
}

export function PieChart({ className, ...props }: ChartProps) {
  return (
    <div className={cn("w-full h-full flex items-center justify-center relative", className)} {...props}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="transparent" />
        <path d="M50,50 L50,10 A40,40 0 0,1 88.2,34.5 Z" fill="rgb(46,47,35)" />
        <path d="M50,50 L88.2,34.5 A40,40 0 0,1 74.2,83.6 Z" fill="rgb(101,136,115)" />
        <path d="M50,50 L74.2,83.6 A40,40 0 0,1 25.8,83.6 Z" fill="rgb(185,199,141)" />
        <path d="M50,50 L25.8,83.6 A40,40 0 0,1 11.8,34.5 Z" fill="rgb(231,227,228)" />
        <path d="M50,50 L11.8,34.5 A40,40 0 0,1 50,10 Z" fill="rgb(210,191,165)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm opacity-0 hover:opacity-100 transition-opacity">
        Chart data is mocked for demonstration
      </div>
    </div>
  )
}

export function HeatMapChart({ className, ...props }: ChartProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const hours = ["00:00", "06:00", "12:00", "18:00"]

  return (
    <div className={cn("w-full h-full flex flex-col relative p-6", className)} {...props}>
      <div className="grid grid-cols-7 gap-2 h-full">
        {days.map((day) => (
          <div key={day} className="flex flex-col gap-2">
            <div className="text-xs text-center text-muted-foreground">{day}</div>
            <div className="grid grid-rows-4 gap-2 flex-1">
              {[0.2, 0.5, 0.8, 0.3].map((opacity, i) => (
                <div
                  key={i}
                  className="bg-primary hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded"
                  style={{ opacity }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {hours.map((hour) => (
          <div key={hour} className="text-xs text-muted-foreground">
            {hour}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm opacity-0 hover:opacity-100 transition-opacity">
        Chart data is mocked for demonstration
      </div>
    </div>
  )
}

export function GeoMapChart({ className, ...props }: ChartProps) {
  return (
    <div className={cn("w-full h-full flex items-center justify-center relative", className)} {...props}>
      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        {/* Simple world map outline */}
        <path
          d="M100,200 Q150,150 200,200 T300,200 T400,200 T500,200 T600,200 T700,200"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        <path d="M100,250 Q200,300 300,250 T500,250 T700,250" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
        <path d="M150,180 Q200,150 250,180 T350,180" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
        <path d="M450,180 Q500,150 550,180 T650,180" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />

        {/* Hotspots */}
        <circle cx="200" cy="180" r="15" fill="hsl(var(--primary) / 0.8)" />
        <circle cx="350" cy="200" r="20" fill="hsl(var(--primary) / 0.6)" />
        <circle cx="500" cy="220" r="25" fill="hsl(var(--primary) / 0.7)" />
        <circle cx="600" cy="180" r="15" fill="hsl(var(--primary) / 0.5)" />
        <circle cx="250" cy="250" r="18" fill="hsl(var(--primary) / 0.4)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm opacity-0 hover:opacity-100 transition-opacity">
        Map data is mocked for demonstration
      </div>
    </div>
  )
}

