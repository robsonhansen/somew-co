"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

// Sample data for projects
const projectsData = {
  "campanha-verao": {
    name: "Campanha Verão",
    description: {
      pt: "Campanha publicitária para marca de roupas de verão, destacando a nova coleção com filmagens em praias paradisíacas.",
      en: "Advertising campaign for a summer clothing brand, highlighting the new collection with footage on paradisiacal beaches.",
    },
    works: [
      {
        id: 1,
        title: "Comercial Principal",
        client: "Marca X",
        year: 2023,
        imageUrl: "/placeholder.svg?height=600&width=800",
        videoUrl: "https://drive.google.com/file/d/1HV6BI6xCok6TaBVl87clsTKdstvW5OOP/view?usp=drive_link",
      },
      {
        id: 2,
        title: "Teaser Redes Sociais",
        client: "Marca X",
        year: 2023,
        imageUrl: "/placeholder.svg?height=600&width=800",
        videoUrl: "https://example.com/video2",
      },
      {
        id: 3,
        title: "Making Of",
        client: "Marca X",
        year: 2023,
        imageUrl: "/placeholder.svg?height=600&width=800",
        videoUrl: "https://example.com/video3",
      },
    ],
  },
  "videoclipe-banda-x": {
    name: "Videoclipe Banda X",
    description: {
      pt: "Videoclipe para o single 'Horizonte' da Banda X, filmado em locações urbanas com estética noturna.",
      en: "Music video for Band X's single 'Horizon', filmed in urban locations with night aesthetics.",
    },
    works: [
      {
        id: 1,
        title: "Videoclipe Oficial",
        client: "Banda X",
        year: 2023,
        imageUrl: "/placeholder.svg?height=600&width=800",
        videoUrl: "https://example.com/video4",
      },
      {
        id: 2,
        title: "Versão Alternativa",
        client: "Banda X",
        year: 2023,
        imageUrl: "/placeholder.svg?height=600&width=800",
        videoUrl: "https://example.com/video5",
      },
    ],
  },
  // Default data for other projects
  default: {
    name: "Projeto",
    description: {
      pt: "Descrição do projeto.",
      en: "Project description.",
    },
    works: [
      {
        id: 1,
        title: "Título do Trabalho",
        client: "Cliente",
        year: 2023,
        imageUrl: "/placeholder.svg?height=600&width=800",
        videoUrl: "https://example.com/video",
      },
    ],
  },
};

interface ProjectProfileProps {
  slug: string;
}

export function ProjectProfile({ slug }: ProjectProfileProps) {
  const { language } = useLanguage();

  // Get project data or use default if not found
  const projectData = projectsData[slug as keyof typeof projectsData] || projectsData.default;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{projectData.name}</h1>
        <p className="text-xl mb-12 max-w-3xl">
          {language === "pt" ? projectData.description.pt : projectData.description.en}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="aspect-video relative overflow-hidden mb-4">
                <Image
                  src={work.imageUrl || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Ver projeto</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">{work.title}</h2>
              <p className="text-gray-600">
                {work.client} | {work.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
