import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechHero from '../components/tech/TechHero';
import ClientShowcase from '../components/health/ClientShowcase';

const rabehTabs = [
  { label: 'تطبيق', dotColor: '#b90c0c' },
  { label: 'تكنولوجيا', dotColor: '#5ed6c5' },
];

export default function TechPage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <TechHero />

        <section className="bg-on-dark" aria-label="أعمالنا في قطاع التطبيقات والتقنية" dir="rtl">
          {/* Rabeh */}
          <ClientShowcase
            title="رابح Rabeh"
            tabs={rabehTabs}
            postsImage1="/assets/tech-rabeh-posts-1.svg"
            postsImage1Alt="أعمال رابح - الجزء الأول"
            postsImage2="/assets/tech-rabeh-posts-2.svg"
            postsImage2Alt="أعمال رابح - الجزء الثاني"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
