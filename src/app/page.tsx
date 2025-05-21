import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import AnimatedLogo from "@/components/AnimationLogo";
import { Footer } from "@/components/footer";
import { LatestWorks } from "@/components/latest-works";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <AnimatedLogo />
      <LatestWorks />
      <Header />
      <Footer />
      <Navigation />
    </main>
  );
}
