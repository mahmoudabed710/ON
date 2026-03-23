import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import ExploreSection from '../components/portfolio/ExploreSection';
import ExpertiseSection from '../components/portfolio/ExpertiseSection';

export default function PortfolioPage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <PortfolioHero />
        <ExploreSection />
        <ExpertiseSection />
      </main>
      <Footer />
    </div>
  );
}
