import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InfluenceHero from '../components/influence/InfluenceHero';
import ClientShowcase from '../components/health/ClientShowcase';

const rkazTabs = [
  { label: 'منصة', dotColor: '#b90c0c' },
  { label: 'التأثير', dotColor: '#5ed6c5' },
];

export default function InfluencePage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <InfluenceHero />

        <section className="bg-on-dark" aria-label="أعمالنا في قطاع التطوير والتأثير" dir="rtl">
          <ClientShowcase
            title="منصة ركاز"
            tabs={rkazTabs}
            postsImage1="/assets/influence-rkaz-posts-1.svg"
            postsImage1Alt="أعمال منصة ركاز - الجزء الأول"
            postsImage2="/assets/influence-rkaz-posts-2.svg"
            postsImage2Alt="أعمال منصة ركاز - الجزء الثاني"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
