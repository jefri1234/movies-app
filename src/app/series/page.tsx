"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search } from "lucide-react"
import MediaCard from "@/components/media-card"

// Datos de ejemplo para series
const seriesData = [
  {
    id: "1",
    title: "Bernardo",
    poster: "/img/series/bernardo.jpg",
    year: "2023",
    rating: 8.7,
    genres: ["Drama", "Ciencia Ficción"],
  },
  {
    id: "2",
    title: "Bob's Burgers",
    poster: "/img/series/bobs-burgers.jpg",
    year: "2022",
    rating: 8.5,
    genres: ["Fantasía", "Drama"],
  },
  {
    id: "3",
    title: "Boo Sponja",
    poster: "/img/series/boo-sponja.jpg",
    year: "2016",
    rating: 8.7,
    genres: ["Drama", "Fantasía"],
  },
  {
    id: "4",
    title: "Breadwinners",
    poster: "/img/series/breadwinners.jpg",
    year: "2008",
    rating: 9.5,
    genres: ["Drama", "Crimen"],
  },
  {
    id: "5",
    title: "Campamento Lakeboton",
    poster: "/img/series/camp-lakeboton.jpg",
    year: "2022",
    rating: 8.6,
    genres: ["Drama", "Comedia"],
  },
  {
    id: "6",
    title: "Danger Mouse",
    poster: "/img/series/danger-mause.jpg",
    year: "2018",
    rating: 8.8,
    genres: ["Drama"],
  },
  {
    id: "7",
    title: "Dinorey",
    poster: "/img/series/dinorey.jpg",
    year: "2019",
    rating: 8.7,
    genres: ["Acción", "Comedia"],
  },
  {
    id: "8",
    title: "Dragon",
    poster: "/img/series/dragon.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "9",
    title: "Family Guy",
    poster: "/img/series/family-guy.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "10",
    title: "Galaxia Wander",
    poster: "/img/series/galaxia-wander.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "11",
    title: "Gravity Falls",
    poster: "/img/series/gravity-falls.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "12",
    title: "Jackie Chan",
    poster: "/img/series/jackie-chan.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "13",
    title: "Kick Buttowski",
    poster: "/img/series/kick.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "14",
    title: "kim possible",
    poster: "/img/series/kim-possible.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "15",
    title: "Scooby Doo",
    poster: "/img/series/scoby-doo.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
  {
    id: "16",
    title: "Los Simpson",
    poster: "/img/series/simpson.jpg",
    year: "2022",
    rating: 8.7,
    genres: ["Drama", "Misterio"],
  },
]

export default function SeriesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSeries = seriesData.filter((series) => series.title.toLowerCase().includes(searchQuery.toLowerCase()))

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
        <h1 className="mb-2 text-3xl font-bold">Series</h1>
        <p className="mb-8 text-slate-400">
          Descubre las mejores series de televisión y mantente al día con los últimos estrenos.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Buscar series..."
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

      {filteredSeries.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {filteredSeries.map((series) => (
            <MediaCard
              key={series.id}
              id={series.id}
              title={series.title}
              poster={series.poster}
              year={series.year}
              rating={series.rating}
              genres={series.genres}
              type="series"
            />
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <p className="text-xl text-slate-400">No se encontraron series que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  )
}
