"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import { useEffect, useState } from "react"

const RainingCode = () => {
  const [drops, setDrops] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const generateDrops = () => {
      const newDrops = []
      for (let i = 0; i < 50; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
        })
      }
      setDrops(newDrops)
    }

    generateDrops()
  }, [])

  const codeChars = [
    "0",
    "1",
    "{",
    "}",
    "<",
    ">",
    "/",
    "=",
    ";",
    "(",
    ")",
    "[",
    "]",
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "class",
    "import",
    "export",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-primary text-xs font-mono opacity-30 dark:opacity-60"
          style={{ left: `${drop.x}%` }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="flex flex-col">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="block">
                {codeChars[Math.floor(Math.random() * codeChars.length)]}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/tech-workspace.png"
          alt="Tech workspace background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-accent/10" />
      </div>

      <RainingCode />

      <div className="container mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl h-48 md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ساخت وبسایت و آموزش آنلاین برنامه‌نویسی
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            تیم متخصص ما آماده ساخت وبسایت‌های مدرن و ارائه آموزش‌های عملی برنامه‌نویسی است. با ما تجربه‌ای متفاوت از
            یادگیری و توسعه داشته باشید.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl group" onClick={scrollToConsultation}>
              درخواست مشاوره رایگان
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl bg-background/50 backdrop-blur-sm group"
              onClick={scrollToServices}
            >
              <Play className="w-5 h-5 ml-2" />
              مشاهده خدمات
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">پروژه موفق</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">دانشجوی راضی</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">سال تجربه</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">پشتیبانی</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
