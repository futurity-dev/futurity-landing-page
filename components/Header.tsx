"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Code2 } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">تیم توسعه وب</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              خانه
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              خدمات
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground hover:text-primary transition-colors"
            >
              درباره ما
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-foreground hover:text-primary transition-colors"
            >
              دوره‌ها
            </button>
            <Button onClick={() => scrollToSection("consultation")} size="sm" className="px-6">
              مشاوره رایگان
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-right py-2 text-foreground hover:text-primary transition-colors"
              >
                خانه
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-right py-2 text-foreground hover:text-primary transition-colors"
              >
                خدمات
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-right py-2 text-foreground hover:text-primary transition-colors"
              >
                درباره ما
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-right py-2 text-foreground hover:text-primary transition-colors"
              >
                دوره‌ها
              </button>
              <Button onClick={() => scrollToSection("consultation")} size="sm" className="w-full mt-2">
                مشاوره رایگان
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
