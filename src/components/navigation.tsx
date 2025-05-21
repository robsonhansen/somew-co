"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Film, Info } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();

  // Estado para controlar se a navegação já pode ser mostrada
  const [canRender, setCanRender] = useState(false);

  // Estado e lógica já existente para esconder o nav na scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Delay para ativar a renderização da navegação (ex: 2s)
    const timer = setTimeout(() => setCanRender(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!canRender) return; // só adiciona listener depois do delay

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 70) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, canRender]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Se não pode renderizar ainda, retorna null para nada mostrar
  if (!canRender) return null;

  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className={`flex flex-col items-center mx-4 transition-colors ${
            isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <Film size={24} />
          <span className="text-xs mt-1">{t("Projects")}</span>
        </Link>

        <Link
          href="/about"
          className={`flex flex-col items-center mx-4 transition-colors ${
            isActive("/about") ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <Info size={24} />
          <span className="text-xs mt-1">{t("about")}</span>
        </Link>
      </div>
    </nav>
  );
}
