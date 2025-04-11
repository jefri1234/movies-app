import Link from "next/link"
import { Film, Heart, Tv } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-slate-950 border-slate-800 px-10">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-sm text-center text-slate-400 md:text-left">
            © 2024 MediaHub. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/peliculas" className="flex items-center gap-1 text-slate-400 hover:text-rose-500">
              <Film className="w-4 h-4" />
              <span>Películas</span>
            </Link>
            <Link href="/series" className="flex items-center gap-1 text-slate-400 hover:text-rose-500">
              <Tv className="w-4 h-4" />
              <span>Series</span>
            </Link>
          </nav>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}
