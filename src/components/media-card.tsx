"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface MediaCardProps {
  id: string
  title: string
  poster: string
  year: string
  rating: number
  genres: string[]
  type: "movie" | "series"
}

export default function MediaCard({ id, title, poster, year, rating, genres, type }: MediaCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const path = type === "movie" ? "/peliculas" : "/series"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`${path}/${id}`}>
        <Card className="overflow-hidden border-0 bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10">
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src={poster || "/placeholder.svg"}
              alt={title}
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            />
            <div className="absolute top-2 right-2">
              <Badge className="flex items-center gap-1 bg-rose-500 hover:bg-rose-600">
                <Star className="w-3 h-3 fill-current" />
                {rating.toFixed(1)}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="mb-1 font-bold line-clamp-1">{title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">{year}</span>
              <div className="flex flex-wrap gap-1">
                {genres.slice(0, 1).map((genre) => (
                  <Badge key={genre} variant="outline" className="text-xs border-slate-700">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
