import { useState, useEffect } from "react"

export function useCheckin() {
  const [checkedInIds, setCheckedInIds] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("psychology_checkins")
      if (stored) {
        setCheckedInIds(new Set(JSON.parse(stored)))
      }
    } catch (e) {
      console.error("Failed to load checkins from local storage", e)
    }
    setIsLoaded(true)
  }, [])

  const toggleCheckin = (id: string) => {
    setCheckedInIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      
      try {
        localStorage.setItem("psychology_checkins", JSON.stringify(Array.from(next)))
      } catch (e) {
        console.error("Failed to save checkins to local storage", e)
      }
      
      return next
    })
  }

  return { checkedInIds, toggleCheckin, isLoaded }
}
