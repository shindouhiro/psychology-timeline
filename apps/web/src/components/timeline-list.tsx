"use client"

import { timelineData } from "@/data/timeline"
import { TimelineNode } from "./timeline-node"
import { useCheckin } from "@/hooks/use-checkin"
import { motion } from "framer-motion"

export function TimelineList() {
  const { checkedInIds, toggleCheckin, isLoaded } = useCheckin()

  // Prevent hydration mismatch
  if (!isLoaded) {
    return <div className="min-h-[50vh] flex items-center justify-center text-muted-foreground animate-pulse">加载时间线中...</div>
  }

  const completedCount = checkedInIds.size
  const totalCount = timelineData.length
  const progress = Math.round((completedCount / totalCount) * 100)

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          学习心理学 <span className="text-primary">时间线</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          探索从早期的构造主义到现代认知心理学的发展历程。沿着时间线学习，掌握核心流派与人物，并点亮你的知识图谱。
        </p>
        
        <div className="pt-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 text-sm font-medium mb-2">
            <span>当前学习进度</span>
            <span className="text-primary font-bold text-lg">{completedCount} / {totalCount}</span>
          </div>
          <div className="w-full max-w-md h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, type: "spring" }}
            />
          </div>
        </div>
      </motion.div>

      <div className="relative pl-6 md:pl-0">
        {timelineData.map((node, index) => (
          <TimelineNode
            key={node.id}
            node={node}
            index={index}
            isCheckedIn={checkedInIds.has(node.id)}
            onCheckIn={toggleCheckin}
          />
        ))}
      </div>
    </div>
  )
}
