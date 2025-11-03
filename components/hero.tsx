"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col min-h-svh justify-center items-center">
      <GL hovering={hovering} />

      <div className="w-full max-w-4xl pb-8 sm:pb-10 md:pb-12 lg:pb-16 text-center relative px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-12 flex flex-col items-center justify-center">
        <Pill className="mb-4 sm:mb-5 md:mb-6">LIMITED FOUNDING SPOTS</Pill>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sentient leading-tight sm:leading-tight md:leading-tight mb-4 sm:mb-5 md:mb-6 px-2">
          Own Your <br className="hidden sm:block" />
          <i className="font-light">Cloud Future</i>
        </h1>

        <p className="font-mono text-sm sm:text-base md:text-lg text-foreground/60 text-balance mt-4 sm:mt-5 md:mt-6 max-w-[90%] sm:max-w-[500px] mx-auto leading-relaxed px-2">
          Be part of an exclusive group of founders building the decentralized cloud infrastructure revolution. Only{" "}
          {"{"}100{"}"} founding spots available—claim yours before it's too late.
        </p>

        <Link href="/founder" className="inline-block mt-8 sm:mt-10 md:mt-12">
          <Button
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="text-sm sm:text-base md:text-lg w-auto"
          >
            [Become a Founder]
          </Button>
        </Link>
      </div>
    </div>
  )
}
