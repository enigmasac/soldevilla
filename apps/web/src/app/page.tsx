import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import SoilComparison from "@/components/SoilComparison";
import Solutions from "@/components/Solutions";
import Science from "@/components/Science";
import Biotech from "@/components/Biotech";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <Solutions />
        <SoilComparison />
        <Science />
        <Biotech />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
