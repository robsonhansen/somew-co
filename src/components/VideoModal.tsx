"use client";

import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | null;
  videoTitle?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, videoTitle = "Project Video" }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Fecha o modal ao pressionar a tecla Escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Fecha o modal ao clicar fora dele (no overlay)
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && event.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen || !videoUrl) {
    return null;
  }

  // Adiciona parâmetros otimizados para o iframe do modal
  const videoUrlComParametrosModal =
    `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1&loop=0&autopause=0&muted=0&controls=1&title=1&byline=1&portrait=1`;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="videoModalTitle"
    >
      <div className="relative bg-black w-full max-w-4xl aspect-video overflow-hidden shadow-xl rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity"
          aria-label="Fechar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe
          src={videoUrlComParametrosModal}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          title={videoTitle}
          id="videoModalTitle"
        ></iframe>
      </div>
    </div>
  );
}

