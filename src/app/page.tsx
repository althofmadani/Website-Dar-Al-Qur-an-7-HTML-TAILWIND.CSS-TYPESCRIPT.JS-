import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Features from "@/components/sections/Features";
import QuickActions from "@/components/sections/QuickActions";
import FAQ from "@/components/sections/FAQ";
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
          <Welcome />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Features />
        </AnimatedSection>

        <AnimatedSection>
          <QuickActions />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <FAQ />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
