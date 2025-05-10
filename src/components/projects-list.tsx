"use client";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

// Sample data for projects
const projects = [
  {
    id: 1,
    name: "Campanha Verão",
    category: "Comercial",
    imageUrl: null,
    slug: "campanha-verao",
  },
  {
    id: 2,
    name: "Videoclipe Banda X",
    category: "Música",
    imageUrl: null,
    slug: "videoclipe-banda-x",
  },
  {
    id: 3,
    name: "Documentário Amazônia",
    category: "Documentário",
    imageUrl: null,
    slug: "documentario-amazonia",
  },
  {
    id: 4,
    name: "Fashion Week",
    category: "Moda",
    imageUrl: null,
    slug: "fashion-week",
  },
  {
    id: 5,
    name: "Curta-metragem",
    category: "Narrativa",
    imageUrl: null,
    slug: "curta-metragem",
  },
  {
    id: 6,
    name: "Instalação Artística",
    category: "Experimental",
    imageUrl: null,
    slug: "instalacao-artistica",
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
            <Link key={project.id} href={`/projects?id=${project.slug}`}>
              <div className="group cursor-pointer border border-gray-200 rounded-lg overflow-hidden">
                <div className="aspect-[3/4] relative bg-gray-100">
                  {/* Fallback para quando a imagem não existe */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500 font-medium">{project.name}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold">{project.name}</h2>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
