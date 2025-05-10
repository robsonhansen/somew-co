import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ProjectProfile } from "@/components/project-profile";
import { Footer } from "@/components/footer";

// Definição correta de tipos para páginas no App Router
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Componente de página com a tipagem correta
export default function ProjectPage({ params, searchParams }: Props) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-24">
        <ProjectProfile slug={params.slug} />
      </div>
      <Footer />
      <Navigation />
    </main>
  );
}
