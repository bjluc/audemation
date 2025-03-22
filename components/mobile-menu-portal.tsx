"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuPortalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenuPortal({ isOpen, onClose }: MobileMenuPortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!mounted) return null

  const menuContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000000",
        zIndex: 9999,
        padding: "1rem",
        overflowY: "auto",
      }}
    >
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold text-gradient">Audemation</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/10 rounded-full"
          aria-label="Close menu"
        >
          <X className="h-10 w-10" />
        </Button>
      </div>

      <nav className="mt-12 flex flex-col items-center gap-6">
        {[
          { href: "/#about", label: "About" },
          { href: "/#services", label: "Services" },
          { href: "/#benefits", label: "Benefits" },
          { href: "/#tech-stack", label: "Technology" },
          { href: "/#airbnb-bot", label: "AirbnbBot" },
          { href: "/#contact", label: "Contact" },
        ].map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-2xl font-medium text-white hover-gradient-text py-2 px-4 transition-colors"
            onClick={onClose}
            style={{
              animation: `fadeIn 0.3s ease forwards ${0.1 + index * 0.05}s`,
              opacity: 0,
            }}
          >
            {item.label}
          </Link>
        ))}

        <a
          href="https://calendly.com/bernard-audemation/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-medium"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            window.open("https://calendly.com/bernard-audemation/30min", "_blank");
          }}
        >
          Get Started
        </a>
      </nav>

      {/* Add animation keyframes and hover styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hover-gradient-text {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .hover-gradient-text:hover {
          background: linear-gradient(to right, #c084fc, #a855f7, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </div>
  )

  if (!isOpen) return null

  return createPortal(menuContent, document.body)
}

