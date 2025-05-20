import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { LatestWorks } from "@/components/latest-works";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <LatestWorks />
      <Footer />
      <Navigation />
    </main>
  );
}
