"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Play, Star, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ReactPlayer from "react-player"

const movieDetails = {
  id: "1",
  title: "El Hobbit: Un Viaje Inesperado",
  poster: "/img/peliculas/hobbit1.jpg",
  backdrop: "/img/peliculas/hobbit1.jpg",
  year: "2024",
  rating: 8.5,
  duration: "166 min",
  genres: ["Ciencia Ficción", "Aventura", "Drama"],
  director: "Peter Jackson",
  cast: ["Martin Freeman", "Ian McKellen", "Richard Armitage", "Andy Serkis"],
  synopsis:
    "Bilbo Bolsón se embarca en una aventura épica para recuperar el reino perdido de Erebor de las garras del temible dragón Smaug.",
}

export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [played, setPlayed] = useState(0)
  const playerRef = useRef<ReactPlayer | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Manejadores de eventos de reproducción
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleProgress = (state: any) => {
    setPlayed(state.played)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const newPlayed = offsetX / rect.width
    setPlayed(newPlayed)
    playerRef.current?.seekTo(newPlayed)
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <Image src={movieDetails.backdrop} alt={movieDetails.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent backdrop-blur-sm" />

        <div className="absolute top-6 left-6 z-20">
          <Link href="/peliculas">
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-slate-900/40">
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
          </Link>
        </div>
      </div>

      <div className="container px-4 mx-auto -mt-32 md:-mt-48 py-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4"
        >
          <div className="md:hidden w-48 mx-auto mt-6 aspect-[2/3] relative overflow-hidden rounded-lg shadow-lg">
            <Image src={movieDetails.poster} alt={movieDetails.title} fill className="object-cover" />
          </div>

          <div className="relative z-10 hidden md:block">
            <div className="sticky top-24 overflow-hidden rounded-lg shadow-2xl aspect-[2/3] shadow-rose-500/10">
              <Image src={movieDetails.poster} alt={movieDetails.title} fill className="object-cover" />
            </div>
          </div>

          <div className="relative z-10 md:col-span-2 lg:col-span-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{movieDetails.title}</h1>
                <Badge className="bg-green-600 text-white">{movieDetails.year}</Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Badge className="flex items-center gap-1 px-2 py-1 text-sm bg-rose-500 hover:bg-rose-600">
                  <Star className="w-4 h-4 fill-current" />
                  {movieDetails.rating.toFixed(1)}
                </Badge>

                <div className="flex items-center gap-1 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{movieDetails.year}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>{movieDetails.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {movieDetails.genres.map((genre) => (
                  <Badge key={genre} variant="outline" className="border-slate-700">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="mt-4">
                <Button onClick={() => setShowVideo(true)} className="gap-2 bg-rose-600 hover:bg-rose-700">
                  <Play className="w-4 h-4 fill-current" />
                  Ver ahora
                </Button>
              </div>

              <div className="mt-6">
                <h2 className="mb-2 text-xl font-bold">Sinopsis</h2>
                <p className="text-slate-300">{movieDetails.synopsis}</p>
              </div>

              <div className="mt-6">
                <h2 className="mb-2 text-xl font-bold">Director</h2>
                <p className="text-slate-300">{movieDetails.director}</p>
              </div>

              <div className="mt-6">
                <h2 className="mb-2 text-xl font-bold">Reparto Principal</h2>
                <div className="flex flex-wrap gap-2">
                  {movieDetails.cast.map((actor) => (
                    <Badge key={actor} variant="secondary" className="bg-slate-800 hover:bg-slate-700 text-slate-200">
                      {actor}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Modal con portada y botón de Play personalizado */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
              {/* Si el video no está reproduciéndose, muestra el botón Play */}
              {!isPlaying ? (
                <>
                  <Image
                    src={movieDetails.poster}
                    alt="Video preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <button
                    onClick={handlePlayPause}
                    className="z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-4 transition"
                  >
                    <Play className="w-10 h-10" />
                  </button>
                </>
              ) : (
                <div className="relative w-full h-full">
                  {/* Reproductor de video sin controles predeterminados */}
                  <ReactPlayer
                    ref={playerRef}
                    url="/videos/hobbit.mp4"
                    playing={isPlaying}
                    controls={false} // No usar controles predeterminados
                    width="100%"
                    height="100%"
                    onProgress={handleProgress}
                    style={{ borderRadius: "0.5rem", overflow: "hidden" }}
                  />

                  {/* Controles personalizados */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4">
                    {/* Barra de progreso */}
                    <div
                      className="w-full h-1 bg-gray-500 rounded-full cursor-pointer"
                      onClick={handleSeek}
                    >
                      <div
                        className="h-1 bg-rose-500 rounded-full"
                        style={{ width: `${played * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-center items-center mt-2 gap-4">
                      {/* Botón de Play/Pausa */}
                      <button
                        onClick={handlePlayPause}
                        className="text-white text-3xl"
                      >
                        {isPlaying ? "⏸️" : "▶️"}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  setShowVideo(false)
                  setIsPlaying(false)
                }}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
