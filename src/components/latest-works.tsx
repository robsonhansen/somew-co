"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

// Sample data for featured works
const featuredWorks = [
  {
    id: 1,
    title: "Project 1",
    director: "Director A",
    client: "Client X",
    imageUrl: null,
    slug: "campanha-verao", // Adicionado slug para link
  },
  {
    id: 2,
    title: "Project 2",
    director: "Director B",
    client: "Client Y",
    imageUrl: null,
    slug: "videoclipe-banda-x", // Adicionado slug para link
  },
  {
    id: 3,
    title: "Project 3",
    director: "Director C",
    client: "Client Z",
    imageUrl: null,
    slug: "documentario-amazonia", // Adicionado slug para link
  },
  {
    id: 4,
    title: "Project 4",
    director: "Director D",
    client: "Client W",
    imageUrl: null,
    slug: "fashion-week", // Adicionado slug para link
  },
];

export function LatestWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t("latestWorks")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredWorks.map((work) => (
            <Link key={work.id} href={`/projects?id=${work.slug}`}>
              <div className="group relative overflow-hidden border border-gray-200 rounded-lg">
                <div className="aspect-video relative bg-gray-100">
                  {/* Fallback para quando a imagem não existe */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500 font-medium">{work.title}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="text-gray-700">{work.director}</p>
                  <p className="text-gray-500">{work.client}</p>
                </div>
              </div>
            </Link>
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
