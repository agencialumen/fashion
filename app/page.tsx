"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import ExclusiveSection from "@/components/exclusive-section"
import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
        <CustomCursor />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <ExclusiveSection />
        </main>
      </div>
    </ThemeProvider>
  )
}
