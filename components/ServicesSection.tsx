"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Monitor } from "lucide-react"

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

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات ما</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ما با تخصص و تجربه، بهترین خدمات را در زمینه توسعه وب و آموزش ارائه می‌دهیم
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">طراحی وبسایت</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  طراحی و توسعه وبسایت‌های مدرن، ریسپانسیو و بهینه با استفاده از جدیدترین تکنولوژی‌ها
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">آموزش پروژه‌محور</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  آموزش برنامه‌نویسی با رویکرد عملی و پروژه‌محور برای یادگیری مؤثر و کاربردی
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">مشاوره تخصصی</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  مشاوره و راهنمایی تخصصی در انتخاب تکنولوژی و مسیر یادگیری مناسب
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
