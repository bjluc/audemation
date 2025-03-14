"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenuPortal from "./mobile-menu-portal"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-10 w-10" />
      </Button>

      {/* Mobile menu portal */}
      <MobileMenuPortal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

