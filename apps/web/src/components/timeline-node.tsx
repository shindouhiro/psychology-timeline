"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { CheckCircle2, Circle, BookOpen, User, Lightbulb } from "lucide-react"
import type { TimelineNode as TimelineNodeType } from "@/data/timeline"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Props {
  node: TimelineNodeType
  isCheckedIn: boolean
  onCheckIn: (id: string) => void
  index: number
}

export function TimelineNode({ node, isCheckedIn, onCheckIn, index }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleCheckIn = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isCheckedIn) {
      const rect = (e.target as HTMLElement).getBoundingClientRect()
      const x = (rect.left + rect.width / 2) / window.innerWidth
      const y = (rect.top + rect.height / 2) / window.innerHeight
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x, y },
        colors: ['#3b82f6', '#8b5cf6', '#ec4899'],
        zIndex: 1000,
      })
    }
    onCheckIn(node.id)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-4 md:gap-8 group"
    >
      {/* Timeline Line & Node Marker */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleCheckIn}
          className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-primary/20"
          aria-label={isCheckedIn ? "取消打卡" : "打卡"}
        >
          {isCheckedIn ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </motion.div>
          ) : (
            <Circle className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </button>
        {/* The connecting line for timeline */}
        <div className="w-0.5 h-full min-h-[80px] bg-gradient-to-b from-primary/50 to-transparent mt-2 group-last:opacity-0" />
      </div>

      {/* Content Card */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger render={<div className="w-full text-left" />} nativeButton={false}>
          <Card className="flex-1 cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-primary/10 bg-card/40 backdrop-blur-md mt-1 border">
            <CardHeader className="pb-3 px-4 md:px-6 pt-4 md:pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">{node.year}</Badge>
                  <CardTitle className="text-xl md:text-2xl text-foreground font-semibold tracking-tight leading-tight">{node.title}</CardTitle>
                </div>
                <Badge variant={isCheckedIn ? "default" : "outline"} className="md:ml-4 w-fit">
                  {node.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
              <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {node.description}
              </CardDescription>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:underline underline-offset-4">
                <BookOpen className="w-4 h-4 mr-2" />
                点击查看学习详情
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>

        {/* Detail Modal */}
        <DialogContent className="sm:max-w-[650px] bg-background/95 backdrop-blur-xl border-primary/20 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight">{node.title}</DialogTitle>
            <DialogDescription className="text-base pt-2 text-foreground/70">
              {node.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            <div>
              <h4 className="flex items-center text-lg font-semibold mb-3 text-primary">
                <User className="w-5 h-5 mr-2" /> 核心代表人物
              </h4>
              <div className="flex flex-wrap gap-2">
                {node.details.coreFigures.map((figure) => (
                  <Badge key={figure} variant="secondary" className="px-3 py-1.5 text-sm bg-secondary/50">{figure}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="flex items-center text-lg font-semibold mb-3 text-primary">
                <Lightbulb className="w-5 h-5 mr-2" /> 核心概念
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {node.details.keyConcepts.map((concept) => (
                  <li key={concept} className="flex items-center text-sm bg-muted/40 rounded-lg p-3 border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 shrink-0" />
                    {concept}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center text-lg font-semibold mb-3 text-primary">
                <BookOpen className="w-5 h-5 mr-2" /> 推荐阅读
              </h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                {node.details.recommendedReading.map((book) => (
                  <div key={book} className="hover:text-foreground transition-colors flex items-center">
                    <span className="text-primary mr-2">›</span> {book}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <p className="text-sm md:text-base leading-relaxed text-foreground/90">{node.details.summary}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-4 border-t border-border/50">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>关闭</Button>
            <Button 
              size="lg"
              className="font-medium"
              onClick={(e) => { handleCheckIn(e); setIsOpen(false); }}
            >
              {isCheckedIn ? "取消打卡" : "完成学习并打卡"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
