/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Importa o motion
import { allProjects } from "@/data/projects";
import { VideoModal } from "./VideoModal";

const featuredWorks = allProjects.filter((project) => project.featured);

type Work = (typeof featuredWorks)[0];

interface WorkItemProps {
  work: Work;
  onVideoSelect: (videoUrl: string, videoTitle: string) => void;
  show: boolean; // novo prop para controlar render
}

function VideoFrameOrImage({ work, show }: { work: Work; show: boolean }) {
  if (!show) return null; // só renderiza quando show for true

  const videoUrlWithParams =
    work.isVimeo && work.videoUrl
      ? `${work.videoUrl}${
          work.videoUrl.includes("?") ? "&" : "?"
        }autoplay=1&loop=1&autopause=0&muted=1&controls=0&title=0&byline=0&portrait=0&background=1`
      : work.videoUrl;

  if (work.isVimeo && videoUrlWithParams) {
    return (
      <iframe
        src={videoUrlWithParams}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        title={work.title}
      />
    );
  }

  if (work.imageUrl) {
    return (
      <img
        src={work.imageUrl}
        alt={work.title}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
      <span className="text-gray-400 font-medium">{work.title}</span>
    </div>
  );
}

function WorkItem({ work, onVideoSelect, show }: WorkItemProps) {
  const handleClick = () => {
    if (work.videoUrl) {
      onVideoSelect(work.videoUrl, work.title);
    }
  };

  return (
    <div onClick={handleClick} className="block group cursor-pointer">
      <div className="relative overflow-hidden bg-black w-full" style={{ paddingBottom: "56.25%" }}>
        <VideoFrameOrImage work={work} show={show} />
      </div>
    </div>
  );
}

export function LatestWorks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string>("");

  const [showVideos, setShowVideos] = useState(false); // controle do render dos vídeos

  const openModal = (url: string, title: string) => {
    setSelectedVideoUrl(url);
    setSelectedVideoTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideoUrl(null);
    setSelectedVideoTitle("");
  };

  return (
    <section className="bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        onAnimationComplete={() => setShowVideos(true)} // quando acabar animação, libera vídeos
        className="grid grid-cols-1 md:grid-cols-2 gap-0"
      >
        {featuredWorks.map((work) => (
          <WorkItem key={work.id} work={work} onVideoSelect={openModal} show={showVideos} />
        ))}
      </motion.div>

      <VideoModal isOpen={modalOpen} onClose={closeModal} videoUrl={selectedVideoUrl} videoTitle={selectedVideoTitle} />
    </section>
  );
}

export default LatestWorks;
