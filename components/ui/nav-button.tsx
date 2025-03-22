"use client"

import { Button } from "./button"
import { useRouter } from "next/navigation"
import type { ButtonProps } from "./button"

interface NavButtonProps extends ButtonProps {
  href: string
}

export function NavButton({ href, ...props }: NavButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    // Check if the link is external
    if (href.startsWith('http') || href.startsWith('https')) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      router.push(href)
    }
  }

  return (
    <Button
      {...props}
      onClick={handleClick}
    />
  )
} 