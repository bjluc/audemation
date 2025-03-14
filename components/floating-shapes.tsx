"use client"

import { useEffect, useState } from "react"

interface Shape {
  id: number
  top: number
  left: number
  size: number
  opacity: number
  rotation: number
  animationDelay: number
  type: "circle" | "square" | "triangle"
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const shapeTypes = ["circle", "square", "triangle"]
    const newShapes: Shape[] = []

    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 60 + 20,
        opacity: Math.random() * 0.09 + 0.04, // Increased from 0.07+0.03 to 0.09+0.04
        rotation: Math.random() * 360,
        animationDelay: Math.random() * 5,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)] as Shape["type"],
      })
    }

    setShapes(newShapes)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => {
        const style = {
          top: `${shape.top}%`,
          left: `${shape.left}%`,
          width: `${shape.size}px`,
          height: `${shape.size}px`,
          opacity: shape.opacity,
          transform: `rotate(${shape.rotation}deg)`,
          animationDelay: `${shape.animationDelay}s`,
        }

        if (shape.type === "circle") {
          return (
            <div key={shape.id} className="absolute rounded-full border border-white/15 animate-float" style={style} /> // Increased from /10 to /15
          )
        } else if (shape.type === "square") {
          return <div key={shape.id} className="absolute border border-white/15 animate-float" style={style} /> // Increased from /10 to /15
        } else {
          return (
            <div
              key={shape.id}
              className="absolute animate-float"
              style={{
                ...style,
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(255, 255, 255, 0.15)`, // Increased from 0.1 to 0.15
              }}
            />
          )
        }
      })}
    </div>
  )
}

