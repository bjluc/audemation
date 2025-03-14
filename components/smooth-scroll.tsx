"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Check if the link is an anchor link
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()

        // Get the header height to offset the scroll position
        const header = document.querySelector("header")
        const headerHeight = header ? header.offsetHeight : 0

        window.scrollTo({
          top: targetElement.offsetTop - headerHeight - 20, // Extra padding
          behavior: "smooth",
        })
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}

