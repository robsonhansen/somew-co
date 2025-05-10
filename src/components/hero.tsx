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
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Vídeo de fundo via YouTube */}
      {videoStarted ? (
        <iframe
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110 pointer-events-none"
          src="https://www.youtube.com/embed/NoC8fDjzmMc?autoplay=1&mute=1&controls=0&loop=1&playlist=NoC8fDjzmMc&modestbranding=1&showinfo=0&rel=0"
          title="SomewCo Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <Image src="/hero-fallback.jpg" alt="Background" fill priority className="object-cover opacity-60" />
      )}

      {/* Camada escura sobreposta */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Texto central esquerdo */}
      <div
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 text-left z-10 transition-opacity duration-1000 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-2">Somew.Co</h1>
        <p className="text-sm md:text-lg">{t("Histórias sentidas. Imagens pensadas")}</p>
      </div>
    </section>
  );
}
