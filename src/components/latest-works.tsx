/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
// import Link from "next/link"; // Removido pois o clique abrirá o modal
import { allProjects } from "@/data/projects";
import { VideoModal } from "./VideoModal"; // Importar o VideoModal

const featuredWorks = allProjects.filter((project) => project.featured);

function WorkItem({ work, onVideoSelect }: { work: (typeof featuredWorks)[0]; onVideoSelect: (videoUrl: string, videoTitle: string) => void; }) {
  const videoUrlComParametrosVitrine =
    work.isVimeo && work.videoUrl
      ? `${work.videoUrl}${work.videoUrl.includes("?") ? "&" : "?"}autoplay=1&loop=1&autopause=0&muted=1&controls=0&title=0&byline=0&portrait=0&background=1`
      : work.videoUrl;

  const handleItemClick = () => {
    if (work.videoUrl) {
      onVideoSelect(work.videoUrl, work.title);
    }
  };

  return (
    <div onClick={handleItemClick} className="block group cursor-pointer">
      <div className="relative overflow-hidden bg-black w-full" style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio container */}
        {work.isVimeo && videoUrlComParametrosVitrine ? (
          <iframe
            src={videoUrlComParametrosVitrine}
            className="absolute top-0 left-0 w-full h-full pointer-events-none" // pointer-events-none para o iframe não capturar o clique
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title={work.title}
          ></iframe>
        ) : work.imageUrl ? (
          <img src={work.imageUrl} alt={work.title} className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <span className="text-gray-400 font-medium">{work.title}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function LatestWorks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string>("");

  const handleOpenModal = (videoUrl: string, videoTitle: string) => {
    setSelectedVideoUrl(videoUrl);
    setSelectedVideoTitle(videoTitle);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVideoUrl(null);
    setSelectedVideoTitle("");
  };

  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {featuredWorks.map((work) => (
          <WorkItem key={work.id} work={work} onVideoSelect={handleOpenModal} />
        ))}
      </div>
      <VideoModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        videoUrl={selectedVideoUrl} 
        videoTitle={selectedVideoTitle} 
      />
    </section>
  );
}

