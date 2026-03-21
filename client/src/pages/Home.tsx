/*
 * FANEOB Home Page
 * Design: Minimalist Vibrant with Soft Gradients
 * Sections: Hero → Sobre → Destaques → Eventos → Oficinas → Inscrição → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import DestaquesSection from "@/components/DestaquesSection";
import EventosSection from "@/components/EventosSection";
import OficinaSection from "@/components/OficinaSection";
import InscricaoSection from "@/components/InscricaoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <DestaquesSection />
        <EventosSection />
        <OficinaSection />
        <InscricaoSection />
      </main>
      <Footer />
    </div>
  );
}
