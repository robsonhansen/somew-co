"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();
  const [showText, setShowText] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
      setVideoStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Vídeo de fundo via Vimeo */}
      {videoStarted ? (
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-700 ease-in-out pointer-events-none"
          src="https://player.vimeo.com/video/1085507994?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&autopause=0&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" // Nova URL do Vimeo com parâmetros de autoplay e loop
          title="SomewCo Video Background"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        // Fallback enquanto o vídeo não carrega ou se não houver vídeo
        <Image src="/hero-poster.png" alt="Background" fill priority className="object-cover opacity-100" />
      )}

      {/* Texto central esquerdo */}
      <div
        className={`
          absolute left-8 top-1/2 transform -translate-y-1/2 text-left z-10
          transition-all duration-1000 ease-out
          ${showText ? "translate-x-20 opacity-0" : "-translate-x-0 opacity-50"}
        `}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-2">Somew.Co</h1>
        <p className="text-sm md:text-lg">{t("slogan")}</p>
      </div>
    </section>
  );
}
