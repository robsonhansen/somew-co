import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ProjectsList } from "@/components/projects-list";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header do projeto */}
      <Header />

      {/* Seção principal com lista de projetos */}
      <div className="pt-24">
        <ProjectsList />
      </div>

      {/* Footer do projeto */}
      <Footer />

      {/* Navegação */}
      <Navigation />
    </main>
  );
}
