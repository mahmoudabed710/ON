import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesHero from '../components/services/ServicesHero';
import ServicesStats from '../components/services/ServicesStats';
import ServicesList from '../components/services/ServicesList';

export default function ServicesPage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesStats />
        <ServicesList />
      </main>
      <Footer />
    </div>
  );
}
