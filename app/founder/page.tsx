"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function FounderPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    donationAmount: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "donationAmount") {
      if (value === "" || Number.parseFloat(value) >= 0) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
        setError("")
      }
      return
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.donationAmount) {
      setError("Please fill in all required fields")
      return
    }

    const donationAmount = Number.parseFloat(formData.donationAmount)
    if (donationAmount < 100) {
      setError("Minimum founding contribution is ₹100")
      return
    }

    setIsLoading(true)
    setError("")

    const upiId = "deploy-union-aryanvbw@ibl"
    const payeeName = "DeployUnion NST"
    const amount = donationAmount.toFixed(2)

    const paymentNote = `Founder:${formData.name}|Phone:${formData.phone}${formData.email ? `|Email:${formData.email}` : ""}`

    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&tn=${encodeURIComponent(paymentNote)}&tr=DU${Date.now()}`

    sessionStorage.setItem("founderData", JSON.stringify(formData))

    try {
      window.location.href = upiLink
      setTimeout(() => {
        router.push("/founder/thank-you")
      }, 1000)
    } catch (error) {
      console.error("Error opening UPI payment:", error)
      setIsLoading(false)
      setError("Failed to process payment. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-12">
      <Link
        href="/"
        className="absolute top-6 sm:top-8 left-3 sm:left-8 text-foreground/60 hover:text-foreground transition-colors text-sm"
      >
        ← Back
      </Link>

      <div className="w-full max-w-lg">
        <div className="text-center mb-8 sm:mb-12 mt-8 sm:mt-0">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#262626]/50 backdrop-blur-xs border border-border rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="inline-block size-2 sm:size-2.5 rounded-full bg-primary" />
            <span className="text-foreground/60 font-mono text-xs sm:text-sm">EXCLUSIVE OPPORTUNITY</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-sentient mb-3 sm:mb-4 leading-tight">
            Become a <br />
            <i className="font-light">Founder</i>
          </h1>
          <p className="text-foreground/60 font-mono text-xs sm:text-sm max-w-sm mx-auto px-2">
            Join an elite group of founders shaping the future of independent cloud infrastructure. Secure your spot in
            the DeployUnion revolution.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name & Surname "
              className="w-full bg-[#262626]/30 border border-border text-foreground placeholder-foreground/30 px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              style={{
                clipPath:
                  "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)",
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2">
              Email Address <span className="text-foreground/40 text-xs">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="founder@example.com"
              className="w-full bg-[#262626]/30 border border-border text-foreground placeholder-foreground/30 px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              style={{
                clipPath:
                  "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)",
              }}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 "
              className="w-full bg-[#262626]/30 border border-border text-foreground placeholder-foreground/30 px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              style={{
                clipPath:
                  "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)",
              }}
            />
          </div>

          <div>
            <label htmlFor="donationAmount" className="block text-xs sm:text-sm font-mono text-foreground/70 mb-2">
              Founding Contribution (₹) *
            </label>
            <input
              type="number"
              id="donationAmount"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              required
              placeholder="5000"
              min="100"
              className="w-full bg-[#262626]/30 border border-border text-foreground placeholder-foreground/30 px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm"
              style={{
                clipPath:
                  "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)",
              }}
            />
            <p className="text-xs text-foreground/50 font-mono mt-1">Minimum: ₹100</p>
          </div>

          {error && <p className="text-xs sm:text-sm text-red-400 font-mono">{error}</p>}

          <Button type="submit" disabled={isLoading} className="w-full mt-6 sm:mt-8 py-2.5 sm:py-3 text-sm">
            {isLoading ? "Processing..." : "Secure Your Spot"}
          </Button>
        </form>

        <p className="text-center text-foreground/40 font-mono text-xs mt-6 sm:mt-8 px-2">
          Only few {"{"}Limited{"}"} founding spots available worldwide
        </p>
      </div>
    </div>
  )
}
