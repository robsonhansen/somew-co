import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { ProjectsList } from "@/components/projects-list"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-24">
        <ProjectsList />
      </div>
      <Footer />
      <Navigation />
    </main>
  )
}
