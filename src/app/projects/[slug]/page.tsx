import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { ProjectProfile } from "@/components/project-profile";
import { Footer } from "@/components/footer";

export default function ProjectPage({ params }: { params: { slug: string } }) {
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
