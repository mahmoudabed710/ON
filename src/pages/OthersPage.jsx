import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OthersHero from '../components/others/OthersHero';
import ClientShowcase from '../components/health/ClientShowcase';

/* ── وزارة البلدية ── */
const municipalityTabs = [
  { label: 'موقع', dotColor: '#b90c0c' },
  { label: 'وزارة البلدية', dotColor: '#5ed6c5' },
];

/* ── مطعم بلحمة ── */
const balhamaTabs = [
  { label: 'التغذية', dotColor: '#5ed6c5' },
];

export default function OthersPage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <OthersHero />

        <section className="bg-on-dark" aria-label="أعمالنا في قطاعات أخرى" dir="rtl">

          {/* وزارة البلدية */}
          <ClientShowcase
            title="وزارة البلدية"
            tabs={municipalityTabs}
            postsImage1="/assets/others-municipality-posts.svg"
            postsImage1Alt="أعمال وزارة البلدية"
          />

          <div className="w-full h-px bg-white/5 mx-auto max-w-[1390px]" aria-hidden="true" />

          {/* مطعم بلحمة */}
          <ClientShowcase
            title="مطعم بلحمة"
            tabs={balhamaTabs}
            postsImage1="/assets/others-balhama-posts-1.svg"
            postsImage1Alt="أعمال مطعم بلحمة - الجزء الأول"
            postsImage2="/assets/others-balhama-posts-2.svg"
            postsImage2Alt="أعمال مطعم بلحمة - الجزء الثاني"
          />

        </section>
      </main>
      <Footer />
    </div>
  );
}
