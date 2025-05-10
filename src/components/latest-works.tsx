"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

// Sample data for featured works
const featuredWorks = [
  {
    id: 1,
    title: "Project 1",
    director: "Director A",
    client: "Client X",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Project 2",
    director: "Director B",
    client: "Client Y",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Project 3",
    director: "Director C",
    client: "Client Z",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Project 4",
    director: "Director D",
    client: "Client W",
    imageUrl: "/placeholder.svg?height=600&width=800",
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
            <div key={work.id} className="group relative overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={work.imageUrl || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold">{work.title}</h3>
                <p className="text-white">{work.director}</p>
                <p className="text-gray-300">{work.client}</p>
              </div>
            </div>
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
