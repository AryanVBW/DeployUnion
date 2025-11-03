import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  return (
    <div className="fixed z-50 pt-4 sm:pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container px-3 sm:px-4">
        <Link href="/">
          <Logo className="w-[100px] xs:w-[110px] sm:w-[120px] md:w-[140px]" />
        </Link>
        <MobileMenu />
      </header>
    </div>
  )
}
