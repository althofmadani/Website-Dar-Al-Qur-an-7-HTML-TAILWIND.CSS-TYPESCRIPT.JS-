import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Profil from "@/components/sections/Profil";
import Galeri from "@/components/sections/Galeri";
import Guru from "@/components/sections/Guru";
import PendaftaranCTA from "@/components/sections/PendaftaranCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <AnimatedSection>
          <Profil />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Guru />
        </AnimatedSection>

        <Galeri />

        <AnimatedSection delay={0.2}>
          <PendaftaranCTA />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
