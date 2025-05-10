"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Home, Film, Info } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Controlar a visibilidade da barra de navegação com base na rolagem
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // Se estiver rolando para baixo e não estiver no topo, ocultar a barra
        if (window.scrollY > lastScrollY && window.scrollY > 70) {
          setIsVisible(false);
        } else {
          // Se estiver rolando para cima ou no topo, mostrar a barra
          setIsVisible(true);
        }
        // Atualizar a posição de rolagem
        setLastScrollY(window.scrollY);
      }
    };

    // Adicionar o evento de rolagem
    window.addEventListener("scroll", controlNavbar);

    // Limpar o evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Verificar se o link está ativo
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center justify-center bg-black backdrop-blur-md rounded-full px-8 py-2.5 shadow-lg border border-white/5">
        <Link
          href="/"
          className={`flex flex-col items-center mx-4 transition-colors ${
            isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <Home size={20} />
          <span className="text-xs mt-1">{t("home")}</span>
        </Link>

        <Link
          href="/projects"
          className={`flex flex-col items-center mx-4 transition-colors ${
            isActive("/projects") ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <Film size={20} />
          <span className="text-xs mt-1">{t("projects")}</span>
        </Link>

        <Link
          href="/about"
          className={`flex flex-col items-center mx-4 transition-colors ${
            isActive("/about") ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <Info size={20} />
          <span className="text-xs mt-1">{t("about")}</span>
        </Link>
      </div>
    </nav>
  );
}
