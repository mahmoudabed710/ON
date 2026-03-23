import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MountainSection from '../components/MountainSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PartnersSection from '../components/PartnersSection';
import ValuesSection from '../components/ValuesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-on-dark">
      <Navbar />
      <main>
        <HeroSection />
        <MountainSection />
        <AboutSection />
        <ServicesSection />
        <PartnersSection />
        <ValuesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
