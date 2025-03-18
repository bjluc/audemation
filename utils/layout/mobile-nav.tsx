"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenuPortal from "./mobile-menu-portal"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(true)} 
        aria-label="Open menu"
        className="md:hidden"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile menu portal */}
      <MobileMenuPortal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

