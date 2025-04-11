"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search } from "lucide-react"
import MediaCard from "@/components/media-card"

// Datos de ejemplo para películas
const moviesData = [
  {
    id: "1",
    title: "El Hobbit: Un Viaje Inesperado",
    poster: "/img/peliculas/hobbit1.jpg",
    year: "2023",
    rating: 7.9,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "3",
    title: "Planet 51",
    poster: "/img/peliculas/planet51.jpg",
    year: "2023",
    rating: 7.9,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "4",
    title: "Arthur y los Minimoys",
    poster: "/img/peliculas/arthur.jpg",
    year: "2024",
    rating: 8.5,
    genres: ["Ciencia Ficción", "Aventura"],
  },
  {
    id: "5",
    title: "Bold",
    poster: "/img/peliculas/bold.jpg",
    year: "2023",
    rating: 8.4,
    genres: ["Drama", "Historia"],
  },
  {
    id: "6",
    title: "Jimmy Neutron: El Niño Genio",
    poster: "/img/peliculas/jimmy-neutron.jpg",
    year: "2023",
    rating: 7.0,
    genres: ["Comedia", "Aventura"],
  },
  {
    id: "7",
    title: "Moster Universe",
    poster: "/img/peliculas/moster-universe.jpg",
    year: "2023",
    rating: 8.1,
    genres: ["Ciencia Ficción", "Romance"],
  },
  {
    id: "8",
    title: "Piraterna",
    poster: "/img/peliculas/piraterna.jpg",
    year: "2023",
    rating: 7.7,
    genres: ["Crimen", "Drama"],
  },
  
  {
    id: "9",
    title: "Ratatouille",
    poster: "/img/peliculas/ratatui.jpg",
    year: "2023",
    rating: 7.8,
    genres: ["Drama", "Historia"],
  },
  {
    id: "10",
    title: "Tom y Jerry: La Película",
    poster: "/img/peliculas/tom-jerry.jpg",
    year: "2024",
    rating: 6.9,
    genres: ["Acción", "Ciencia Ficción"],
  },
  {
    id: "11",
    title: "Up: Una Aventura de Altura",
    poster: "/img/peliculas/up.jpg",
    year: "2023",
    rating: 6.5,
    genres: ["Acción", "Aventura"],
  },
  {
    id: "12",
    title: "Wallace y Gromit: La Maldición de las Verduras",
    poster: "/img/peliculas/walla-gromit.jpg",
    year: "2024",
    rating: 7.2,
    genres: ["Ciencia Ficción", "Aventura"],
  },

  
]

export default function PeliculasPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMovies = moviesData.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="mb-2 text-3xl font-bold">Películas</h1>
        <p className="mb-8 text-slate-400">
          Explora nuestra colección de películas populares y descubre nuevos títulos.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Buscar películas..."
            className="pl-8 bg-slate-900 border-slate-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-slate-900">
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="popular">Populares</TabsTrigger>
              <TabsTrigger value="recent">Recientes</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="icon" className="border-slate-800">
            <Filter className="w-4 h-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>
      </div>

      {filteredMovies.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {filteredMovies.map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              year={movie.year}
              rating={movie.rating}
              genres={movie.genres}
              type="movie"
            />
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <p className="text-xl text-slate-400">No se encontraron películas que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  )
}
