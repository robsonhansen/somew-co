"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Verificar se a largura da tela é menor que 768px (tamanho típico para mobile)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar no carregamento inicial
    checkMobile()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkMobile)

    // Limpar listener quando o componente for desmontado
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
