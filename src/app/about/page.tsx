import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { AboutContent } from "@/components/about-content"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-24">
        <AboutContent />
        <ContactForm />
      </div>
      <Footer />
      <Navigation />
    </main>
  )
}
