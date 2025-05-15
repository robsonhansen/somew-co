/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { allProjects } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const featuredWorks = allProjects.filter((project) => project.featured);

function WorkItem({ work }: { work: (typeof featuredWorks)[0] }) {
  const [videoRef] = useIntersectionObserver({ threshold: 0.5 });

  // Adicionar parâmetros de autoplay e controle para URLs do Vimeo
  const videoUrlComParametros =
    work.isVimeo && work.videoUrl // Corrigido: sem acento
      ? `${work.videoUrl}${
          work.videoUrl.includes("?") ? "&" : "?"
        }autoplay=1&loop=1&autopause=0&muted=1&controls=0&title=0&byline=0&portrait=0`
      : work.videoUrl;

  return (
    <Link href={`/projects/${work.slug}`} className="block group">
      <div className="relative overflow-hidden border border-gray-200 rounded-lg aspect-video bg-black">
        {work.isVimeo && videoUrlComParametros ? ( // Corrigido: sem acento
          <iframe
            src={videoUrlComParametros} // Corrigido: sem acento
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title={work.title}
          ></iframe>
        ) : work.videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrlComParametros} // Corrigido: sem acento
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            loop
            muted
          />
        ) : work.imageUrl ? (
          <img src={work.imageUrl} alt={work.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 font-medium">{work.title}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{work.title}</h3>
        <p className="text-gray-700">{work.director}</p>
        <p className="text-gray-500">{work.client}</p>
      </div>
    </Link>
  );
}

export function LatestWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl font-bold mb-8 px-4">{t("latestWorks")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {featuredWorks.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/projects">{t("viewMore")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
