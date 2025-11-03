"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FounderData {
  name: string
  email: string
  phone: string
  donationAmount: string
}

export default function ThankYouPage() {
  const [founderData, setFounderData] = useState<FounderData | null>(null)

  useEffect(() => {
    const data = sessionStorage.getItem("founderData")
    if (data) {
      setFounderData(JSON.parse(data))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-12">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8 sm:mb-12">
          <div
            className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/20 mb-4 sm:mb-6 mx-auto"
            style={{
              clipPath:
                "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
            }}
          >
            <span className="text-primary text-2xl sm:text-4xl">✓</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-sentient mb-3 sm:mb-4 leading-tight">
            Welcome to the <br />
            <i className="font-light">Revolution</i>
          </h1>

          <p className="text-foreground/60 font-mono text-xs sm:text-sm max-w-sm mx-auto mb-6 sm:mb-8 px-2">
            Your founding contribution has been received. You are now part of an exclusive group reshaping cloud
            infrastructure.
          </p>
        </div>

        {founderData && (
          <div
            className="bg-[#262626]/30 border border-primary/30 px-4 sm:px-6 py-6 sm:py-8 mb-6 sm:mb-8 space-y-3 sm:space-y-4"
            style={{
              clipPath:
                "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
            }}
          >
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-2 sm:py-3 border-b border-foreground/10 gap-2">
              <span className="text-foreground/60 font-mono text-xs sm:text-sm">Founder Name</span>
              <span className="text-foreground font-mono text-sm break-words">{founderData.name}</span>
            </div>

            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-2 sm:py-3 border-b border-foreground/10 gap-2">
              <span className="text-foreground/60 font-mono text-xs sm:text-sm">Email</span>
              <span className="text-foreground font-mono text-xs sm:text-sm truncate">
                {founderData.email || "N/A"}
              </span>
            </div>

            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-2 sm:py-3 border-b border-foreground/10 gap-2">
              <span className="text-foreground/60 font-mono text-xs sm:text-sm">Phone</span>
              <span className="text-foreground font-mono text-sm">{founderData.phone}</span>
            </div>

            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center py-2 sm:py-3 pt-2 sm:pt-4 gap-2">
              <span className="text-foreground font-mono font-semibold text-sm">Contribution</span>
              <span className="text-primary font-mono text-base sm:text-lg font-bold">
                ₹{Number.parseFloat(founderData.donationAmount).toLocaleString()}
              </span>
            </div>
          </div>
        )}

        <div
          className="bg-[#262626]/50 border border-border px-4 sm:px-6 py-6 sm:py-8 mb-6 sm:mb-8 text-center"
          style={{
            clipPath:
              "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
          }}
        >
          <h2 className="text-lg sm:text-xl font-sentient mb-2 sm:mb-3">What's Next?</h2>
          <p className="text-foreground/60 font-mono text-xs sm:text-sm">
            Our team will contact you within 24 hours to confirm your founding membership, discuss equity details, and
            welcome you to the DeployUnion family.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full bg-transparent text-sm py-2.5">
              Return to Home
            </Button>
          </Link>
          <a href="mailto:vivek.aryanvbw@gmail.com" className="w-full">
            <Button className="w-full text-sm py-2.5">Contact Us</Button>
          </a>
        </div>

        <p className="text-center text-foreground/40 font-mono text-xs mt-6 sm:mt-8 px-2">
          Secure Transaction | Your details are encrypted and protected
        </p>
      </div>
    </div>
  )
}
