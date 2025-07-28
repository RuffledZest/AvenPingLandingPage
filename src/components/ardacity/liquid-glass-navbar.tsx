"use client"

import type React from "react"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { animate, motion, useAnimation } from "framer-motion"

interface LiquidGlassNavbarProps {
  brand: string
  links: Array<{ label: string; href: string }>
  cta?: { label: string; href: string }
  className?: string
  scrollTargetId?: string
  scrolled?: boolean // NEW: control rounded corners
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.01,
    proximity = 64,
    spread = 40,
    variant = "default",
    glow = true,
    className,
    disabled = false,
    movementDuration = 2,
    borderWidth = 1,
  }: {
    blur?: number
    inactiveZone?: number
    proximity?: number
    spread?: number
    variant?: "default" | "white"
    glow?: boolean
    className?: string
    disabled?: boolean
    movementDuration?: number
    borderWidth?: number
  }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const lastPosition = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number>(0)

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current
          if (!element) return
          const { left, top, width, height } = element.getBoundingClientRect()
          const mouseX = e?.x ?? lastPosition.current.x
          const mouseY = e?.y ?? lastPosition.current.y
          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY }
          }
          const center = [left + width * 0.5, top + height * 0.5]
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone
          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0")
            return
          }
          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity
          element.style.setProperty("--active", isActive ? "1" : "0")
          if (!isActive) return
          const currentAngle = Number.parseFloat(element.style.getPropertyValue("--start")) || 0
          const targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90
          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
          const newAngle = currentAngle + angleDiff
          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value))
            },
          })
        })
      },
      [inactiveZone, proximity, movementDuration],
    )

    useEffect(() => {
      if (disabled) return
      const handleScroll = () => handleMove()
      const handlePointerMove = (e: PointerEvent) => handleMove(e)
      window.addEventListener("scroll", handleScroll, { passive: true })
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      })
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        window.removeEventListener("scroll", handleScroll)
        document.body.removeEventListener("pointermove", handlePointerMove)
      }
    }, [handleMove, disabled])

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block",
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
                 radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)),
                   #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden",
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
            )}
          />
        </div>
      </>
    )
  },
)

GlowingEffect.displayName = "GlowingEffect"

export function LiquidGlassNavbar({ brand, links, cta, className, scrollTargetId, scrolled }: LiquidGlassNavbarProps) {
  // Remove local scrolled state, use prop instead
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="glass-distortion-card" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.002 0.008" numOctaves="2" seed="17" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1.2" exponent="8" offset="0.4" />
            <feFuncG type="gamma" amplitude="0.1" exponent="1" offset="0.1" />
            <feFuncB type="gamma" amplitude="0.1" exponent="1" offset="0.6" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="4" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="8"
            specularConstant="1.5"
            specularExponent="120"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-150" y="-150" z="400" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1.2" k3="1.2" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="300" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className={cn(
        "transform mx-auto z-50 transition-all duration-500 ease-in-out",
        scrolled ? "w-[60%] mx-auto rounded-full" : "mx-auto w-full rounded-none",
        className
      )}>
        <div className={cn(
          "liquidGlass-wrapper relative flex font-semibold overflow-hidden text-black cursor-pointer p-2 hover:p-[10px] hover:scale-[1] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,2.2)]",
          scrolled ? "rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.2)]" : "rounded-none shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
        )}>
          <div className={cn("liquidGlass-effect absolute z-0 inset-0 [backdrop-filter:blur(3px)] [filter:url(#glass-distortion-card)] overflow-hidden [isolation:isolate]", scrolled ? "rounded-full" : "rounded-none")} />
          <div className={cn("liquidGlass-tint z-[1] absolute inset-0 bg-white/[0.048]", scrolled ? "rounded-full" : "rounded-none")} />
          <div className={cn("liquidGlass-shine absolute inset-0 z-[2] overflow-hidden", scrolled ? "rounded-full shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5)]" : "rounded-none shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5)]")}/>

          <div className="relative z-[3] flex items-center justify-between w-full px-6 py-3">
            <div className="text-xl font-bold tracking-tight text-white dark:text-white drop-shadow-md">
              {brand}
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="hover:text-purple-500 text-white  hover:border-1 hover:border-white/70 transition-all hover:scale-110 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  {link.label}
                </a>
              ))}
            </nav>
            {cta && (
              <div className="flex-shrink-0">
                <a
                  href={cta.href}
                  className="bg-primary text-black px-4 py-2 bg-white rounded-full text-sm shadow hover:scale-105 transition-transform duration-200"
                >
                  {cta.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// Draggable wrapper for demo usage
export function DraggableLiquidGlassNavbar(props: LiquidGlassNavbarProps) {
  const controls = useAnimation()
  const [isDragging, setIsDragging] = useState(false)
  const [resetTimeout, setResetTimeout] = useState<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  // Center position calculation
  const getCenter = () => {
    const width = 600
    const height = 80
    const x = typeof window !== "undefined" ? (window.innerWidth - width) / 2 : 0
    const y = typeof window !== "undefined" ? 40 : 0
    return { x, y }
  }

  useEffect(() => {
    const { x, y } = getCenter()
    controls.start({ x, y, opacity: 1, transition: { duration: 0.2 } })
  }, [controls])

  const handleDragStart = () => {
    setIsDragging(true)
    if (resetTimeout) clearTimeout(resetTimeout)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    // After 3 seconds, return to center
    const timeout = setTimeout(() => {
      const { x, y } = getCenter()
      controls.start({ x, y, transition: { duration: 0.3, ease: "easeInOut" } })
    }, 3000)
    setResetTimeout(timeout)
  }

  return (
    <motion.div
      ref={navRef}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        zIndex: 100,
        position: "fixed",
        width: 600,
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      animate={controls}
      initial={getCenter()}
    >
      <LiquidGlassNavbar {...props} />
    </motion.div>
  )
}