"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Smartphone, Star } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">دوره‌های آموزشی</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            دوره‌های عملی و کاربردی ما برای یادگیری تکنولوژی‌های مدرن
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">آموزش Next.js</CardTitle>
                <CardDescription>یادگیری کامل فریمورک Next.js برای ساخت وب‌اپلیکیشن‌های مدرن</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 (120 نظر)</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  مشاهده دوره
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">آموزش Django</CardTitle>
                <CardDescription>توسعه بک‌اند قدرتمند با فریمورک Django و Python</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 (95 نظر)</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  مشاهده دوره
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">پروژه فروشگاهی</CardTitle>
                <CardDescription>ساخت فروشگاه آنلاین کامل با پنل مدیریت و درگاه پرداخت</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 (150 نظر)</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  مشاهده دوره
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
