"use client";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { allProjects } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function ProjectItem({ project }: { project: (typeof allProjects)[0] }) {
  const [videoRef] = useIntersectionObserver({ threshold: 0.5 });

  // Adicionar parâmetros de autoplay e controle para URLs do Vimeo
  const videoUrlComParametros =
    project.isVimeo && project.videoUrl // Corrigido: sem acento
      ? `${project.videoUrl}${
          project.videoUrl.includes("?") ? "&" : "?"
        }autoplay=1&loop=1&autopause=0&muted=1&controls=0&title=0&byline=0&portrait=0`
      : project.videoUrl;

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="relative overflow-hidden border border-gray-200 rounded-lg aspect-[3/4] bg-black">
        {project.isVimeo && videoUrlComParametros ? ( // Corrigido: sem acento
          <iframe
            src={videoUrlComParametros} // Corrigido: sem acento
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title={project.name}
          ></iframe>
        ) : project.videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrlComParametros} // Corrigido: sem acento
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            loop
            muted
          />
        ) : project.imageUrl ? (
          <img src={project.imageUrl} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 font-medium">{project.name}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <p className="text-gray-600">{project.category}</p>
      </div>
    </Link>
  );
}

export function ProjectsList() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-0">
        <h1 className="text-4xl font-bold mb-12 px-4">{t("allProjects")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {allProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
