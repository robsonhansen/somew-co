"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [logoOpacity, setLogoOpacity] = useState(1);
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // Ponto de scroll onde a opacidade será mínima
      let newOpacity = 1 - scrollY / maxScroll;
      newOpacity = Math.max(0, Math.min(1, newOpacity)); // Garante que a opacidade fique entre 0 e 1
      setLogoOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Define a opacidade inicial correta

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // O header em si pode continuar com seu estilo, a opacidade será aplicada apenas no logo
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm py-4 transition-opacity duration-300">
      <div className="container mx-auto flex justify-center items-center">
        <Link
          href="/"
          className="flex items-center"
          style={{ opacity: logoOpacity, transition: "opacity 0.3s ease-out" }}
        >
          <Logo className="h-16 w-auto" />
        </Link>
      </div>

      {pathname !== "/" && (
        <div className="absolute top-4 right-4">
          <Button variant="ghost" onClick={toggleLanguage} className="text-black hover:text-gray-300 transition-colors">
            {language === "pt" ? "EN" : "PT"}
          </Button>
        </div>
      )}
    </header>
  );
}
