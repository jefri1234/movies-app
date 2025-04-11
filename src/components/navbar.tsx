"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Menu, Search, Tv, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-950/80 backdrop-blur-md border-slate-800">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-rose-500">MediaHub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/peliculas"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-rose-500"
          >
            <Film className="w-4 h-4" />
            Películas
          </Link>
          <Link
            href="/series"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-rose-500"
          >
            <Tv className="w-4 h-4" />
            Series
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              type="search"
              placeholder="Buscar..."
              className="w-64 pl-8 bg-slate-900 border-slate-800 focus-visible:ring-rose-500"
            />
          </div>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-slate-950 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <span className="text-xl font-bold text-rose-500">MediaHub</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="w-5 h-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="relative my-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Buscar..." className="w-full pl-8 bg-slate-900 border-slate-800" />
          </div>
          <nav className="flex flex-col gap-2 mt-4">
            <Link
              href="/peliculas"
              className="flex items-center gap-2 p-2 text-sm font-medium rounded-md hover:bg-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <Film className="w-5 h-5 text-rose-500" />
              Películas
            </Link>
            <Link
              href="/series"
              className="flex items-center gap-2 p-2 text-sm font-medium rounded-md hover:bg-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <Tv className="w-5 h-5 text-rose-500" />
              Series
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
