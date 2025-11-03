import type React from "react"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text
        x="10"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        letterSpacing="0.5"
      >
        DeployUnion
      </text>

      {/* Decorative accent line */}
      <line x1="10" y1="40" x2="100" y2="40" stroke="#FFC700" strokeWidth="2" />
    </svg>
  )
}
