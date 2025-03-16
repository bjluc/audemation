import type React from "react"
import { Database, GitBranch, Code, Bot, Braces, Box } from "lucide-react"

interface TechItem {
  name: string
  description: string
  icon: React.ReactNode
}

export default function TechStack() {
  const technologies: TechItem[] = [
    {
      name: "OpenAI",
      description: "For natural language processing and advanced AI capabilities.",
      icon: <Bot className="h-6 w-6 text-primary" />,
    },
    {
      name: "Python",
      description: "For machine learning and backend development.",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      name: "Supabase",
      description: "For cloud computing and database management.",
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      name: "n8n and Flowise",
      description: "For integration and automation using no-code tools.",
      icon: <Braces className="h-6 w-6 text-primary" />,
    },
    {
      name: "Git",
      description: "For version control and collaborative development.",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
    },
    {
      name: "NextJS",
      description: "For web development and responsive user interfaces.",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      name: "Langchain",
      description: "For automation and workflow management.",
      icon: <Braces className="h-6 w-6 text-primary" />,
    },
    {
      name: "Docker",
      description: "For containerisation and deployment.",
      icon: <Box className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="glass-card p-3 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center"
        >
          <div className="bg-primary/10 p-2 rounded-full w-fit mb-2">{tech.icon}</div>
          <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{tech.name}</h3>
          <p className="text-xs md:text-sm text-foreground/80">{tech.description}</p>
        </div>
      ))}
    </div>
  )
}

