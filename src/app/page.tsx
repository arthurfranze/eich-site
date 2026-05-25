import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedClients from "./components/FeaturedClients";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Differentials from "./components/Differentials";
import About from "./components/About";
import QualityPolicy from "./components/QualityPolicy";
import Clients from "./components/Clients";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedClients />
      <Services />
      <HowItWorks />
      <Differentials />
      <About />
      <QualityPolicy />
      <Clients />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
