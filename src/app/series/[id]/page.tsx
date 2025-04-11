"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Play, Star } from "lucide-react"
import { motion } from "framer-motion"

// Datos de ejemplo para detalles de serie
const seriesDetails = {
  id: "1",
  title: "The Last of Us",
  poster: "/placeholder.svg?height=450&width=300",
  backdrop: "/placeholder.svg?height=600&width=1200",
  year: "2023",
  rating: 8.7,
  seasons: 1,
  episodes: 9,
  genres: ["Drama", "Ciencia Ficción", "Acción"],
  creators: ["Craig Mazin", "Neil Druckmann"],
  cast: ["Pedro Pascal", "Bella Ramsey", "Gabriel Luna", "Anna Torv"],
  synopsis:
    "Veinte años después de que la civilización moderna fuera destruida, Joel, un superviviente nato, es contratado para sacar de contrabando a Ellie, una niña de 14 años, fuera de una opresiva zona de cuarentena. Lo que comienza como un pequeño trabajo pronto se convierte en un viaje brutal y desgarrador, ya que ambos deben atravesar los Estados Unidos y depender el uno del otro para sobrevivir.",
}

export default function SeriesDetailPage({ params }: { params: { id: string } }) {
  // En una aplicación real, aquí cargarías los datos de la serie según el ID
  // const { id } = params;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {/* Hero section with backdrop */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image
          src={seriesDetails.backdrop || "/placeholder.svg"}
          alt={seriesDetails.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20" />

        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="container mx-auto">
            <Link href="/series">
              <Button variant="ghost" className="mb-4 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a series
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto -mt-32 md:-mt-48">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 hidden md:block"
          >
            <div className="sticky top-24 overflow-hidden rounded-lg shadow-2xl aspect-[2/3] shadow-rose-500/10">
              <Image
                src={seriesDetails.poster || "/placeholder.svg"}
                alt={seriesDetails.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 md:col-span-2 lg:col-span-3"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{seriesDetails.title}</h1>

              <div className="flex flex-wrap items-center gap-4">
                <Badge className="flex items-center gap-1 px-2 py-1 text-sm bg-rose-500 hover:bg-rose-600">
                  <Star className="w-4 h-4 fill-current" />
                  {seriesDetails.rating.toFixed(1)}
                </Badge>

                <div className="flex items-center gap-1 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{seriesDetails.year}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>
                    {seriesDetails.seasons} temporada{seriesDetails.seasons > 1 ? "s" : ""}, {seriesDetails.episodes}{" "}
                    episodios
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {seriesDetails.genres.map((genre) => (
                  <Badge key={genre} variant="outline" className="border-slate-700">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="mt-4">
                <Button className="gap-2 bg-rose-600 hover:bg-rose-700">
                  <Play className="w-4 h-4 fill-current" />
                  Ver Trailer
                </Button>
              </div>

              <div className="mt-6">
                <h2 className="mb-2 text-xl font-bold">Sinopsis</h2>
                <p className="text-slate-300">{seriesDetails.synopsis}</p>
              </div>

              <div className="mt-6">
                <h2 className="mb-2 text-xl font-bold">Creadores</h2>
                <div className="flex flex-wrap gap-2">
                  {seriesDetails.creators.map((creator) => (
                    <Badge key={creator} variant="secondary" className="bg-slate-800 hover:bg-slate-700 text-slate-200">
                      {creator}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h2 className="mb-2 text-xl font-bold">Reparto Principal</h2>
                <div className="flex flex-wrap gap-2">
                  {seriesDetails.cast.map((actor) => (
                    <Badge key={actor} variant="secondary" className="bg-slate-800 hover:bg-slate-700 text-slate-200">
                      {actor}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
