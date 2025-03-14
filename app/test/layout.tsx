import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test Page",
  description: "A simple test page",
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen p-4">
      {children}
    </div>
  )
} 