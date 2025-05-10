import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ProjectProfile } from "@/components/project-profile";
import { Footer } from "@/components/footer";

// Definição de tipos para os parâmetros da página
interface PageParams {
  slug: string;
}

// Componente de página com a tipagem correta
export default function ProjectPage({ params }: { params: PageParams }) {
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

// Função opcional para gerar parâmetros estáticos (se necessário)
export async function generateStaticParams() {
  // Retorna um array de possíveis valores para slug
  // Isso é opcional, mas pode ajudar com a tipagem
  return [
    { slug: "campanha-verao" },
    { slug: "videoclipe-banda-x" },
    // Adicione outros slugs conforme necessário
  ];
}
