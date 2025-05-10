import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ProjectProfile } from "@/components/project-profile";
import { Footer } from "@/components/footer";

interface ProjectPageProps {
  params: {
    slug: string | string[] | undefined;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Garantir que 'slug' seja sempre uma string
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // Se 'slug' for undefined, podemos dar um valor padrão, como uma string vazia.
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-24">
        <ProjectProfile slug={slug ?? ""} /> {/* Passando um valor padrão se for undefined */}
      </div>
      <Footer />
      <Navigation />
    </main>
  );
}
