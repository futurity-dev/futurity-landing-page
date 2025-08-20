"use client"

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import WhyUsSection from "@/components/WhyUsSection"
import CoursesSection from "@/components/CoursesSection"
import ConsultationSection from "@/components/ConsultationSection"
import Footer from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <CoursesSection />
      <ConsultationSection />
      <Footer />
    </div>
  )
}
