import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Film, Tv } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Explora el mundo del <span className="text-rose-500">entretenimiento</span>
          </h1>
          <p className="mb-10 text-xl text-slate-300">
            Descubre las mejores películas y series en un solo lugar, con información detallada y recomendaciones
            personalizadas.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/peliculas">
              <Button size="lg" className="gap-2 bg-rose-600 hover:bg-rose-700">
                <Film className="w-5 h-5" />
                Explorar Películas
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/series">
              <Button size="lg" variant="outline" className="gap-2 text-white border-slate-700 hover:bg-slate-800">
                <Tv className="w-5 h-5" />
                Explorar Series
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
