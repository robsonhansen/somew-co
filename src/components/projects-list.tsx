"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

// Sample data for projects
const projects = [
  {
    id: 1,
    name: "Campanha Verão",
    category: "Comercial",
    imageUrl: "/placeholder.svg?height=600&width=400",
    slug: "campanha-verao",
  },
  {
    id: 2,
    name: "Videoclipe Banda X",
    category: "Música",
    imageUrl: "/placeholder.svg?height=600&width=400",
    slug: "videoclipe-banda-x",
  },
  {
    id: 3,
    name: "Documentário Amazônia",
    category: "Documentário",
    imageUrl: "/placeholder.svg?height=600&width=400",
    slug: "documentario-amazonia",
  },
];

export function ProjectsList() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t("allProjects")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] relative overflow-hidden mb-4">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
