import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import localFont from 'next/font/local';
const vazir = localFont({
  src: './fonts/Vazir.ttf',
})

export const metadata: Metadata = {
  title: "تیم توسعه وب - ساخت وبسایت و آموزش برنامه‌نویسی",
  description: "تیم متخصص ما آماده ساخت وبسایت‌های مدرن و ارائه آموزش‌های عملی برنامه‌نویسی است",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className={vazir.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
