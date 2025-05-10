"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();
  const [videoError, setVideoError] = useState(false);
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
      {/* Vídeo de fundo com zoom */}
      {videoStarted && !videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 transform scale-110"
          onError={() => setVideoError(true)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
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
