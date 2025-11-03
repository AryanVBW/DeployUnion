"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col min-h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-6 sm:pb-8 md:pb-12 lg:pb-16 mt-auto text-center relative px-3 sm:px-4 md:px-6 pt-8 sm:pt-10 md:pt-12">
        <Pill className="mb-3 sm:mb-4 md:mb-6 mx-auto">LIMITED FOUNDING SPOTS</Pill>

        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sentient leading-tight mb-3 sm:mb-4">
          Own Your <br className="hidden sm:block" />
          <i className="font-light">Cloud Future</i>
        </h1>

        <p className="font-mono text-xs sm:text-sm md:text-base text-foreground/60 text-balance mt-3 sm:mt-4 md:mt-6 max-w-[500px] mx-auto px-1 sm:px-2 leading-relaxed">
          Be part of an exclusive group of founders building the decentralized cloud infrastructure revolution. Only{" "}
          {"{"}100{"}"} founding spots available—claim yours before it's too late.
        </p>

        <Link href="/founder" className="inline-block mt-6 sm:mt-8 md:mt-12">
          <Button
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3"
          >
            [Become a Founder]
          </Button>
        </Link>
      </div>
    </div>
  )
}
