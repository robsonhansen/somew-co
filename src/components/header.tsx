"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm py-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="flex items-center">
          <Logo className="h-16 w-auto" />
        </Link>
      </div>

      <div className="absolute top-4 right-4">
        <Button variant="ghost" onClick={toggleLanguage} className="text-white hover:text-gray-300 transition-colors">
          {language === "pt" ? "EN" : "PT"}
        </Button>
      </div>
    </header>
  )
}
