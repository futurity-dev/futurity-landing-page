"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">چرا ما را انتخاب کنید؟</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">تیم متخصص</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تیم ما از برنامه‌نویسان با تجربه و متخصصان حرفه‌ای تشکیل شده است
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">آموزش عملی</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    رویکرد عملی و پروژه‌محور ما باعث یادگیری سریع‌تر و مؤثرتر می‌شود
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">پشتیبانی کامل</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    پشتیبانی ۲۴/۷ و همراهی شما در تمام مراحل پروژه و یادگیری
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">پروژه موفق</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">دانشجوی راضی</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">سال تجربه</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">پشتیبانی</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
