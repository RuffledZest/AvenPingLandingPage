"use client"
import AnimatedNavbar from "@/components/ardacity/animated-navbar";
import { LiquidGlassNavbar } from "@/components/ardacity/liquid-glass-navbar";
import { LiquidGlassMusicPlayer } from "@/components/liquid-glass-music-player";
import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Pricing from "@/sections/Pricing";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { useRef } from "react";

export default function Home() {
    const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initLocomotiveScroll = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }

      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          syncTouch: false,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
        autoStart: true,
      })

      locomotiveScrollRef.current = locomotiveScroll
    }

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initLocomotiveScroll, 100)

    return () => {
      clearTimeout(timer)
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
    }
  }, [])
    return (
        <div ref={scrollRef} data-scroll-container>
            {/* <Navbar /> */}
          
            <AnimatedNavbar />
            
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Pricing />
            <Faqs />
            <CallToAction />
            <Footer />
        </div>
    );
}