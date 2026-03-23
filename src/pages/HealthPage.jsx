import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HealthHero from '../components/health/HealthHero';
import ClientShowcase from '../components/health/ClientShowcase';

/* Medvision reel thumbnails — portrait, medical theme */
const medvisionReels = [
  {
    thumbnail: 'https://picsum.photos/seed/medvision-dr1/300/534',
    alt: 'طبيبة متخصصة في العيادة',
  },
  {
    thumbnail: 'https://picsum.photos/seed/medvision-dr2/300/534',
    alt: 'استشارة طبية احترافية',
  },
  {
    thumbnail: 'https://picsum.photos/seed/medvision-dr3/300/534',
    alt: 'طبيب يشرح العلاج',
  },
];

/* Seha Care reel thumbnails */
const sehaCareReels = [
  {
    thumbnail: 'https://picsum.photos/seed/sehacare-nurse1/300/534',
    alt: 'ممرضة رعاية صحية منزلية',
  },
];

const medvisionTabs = [
  { label: 'عيادات التجميل', dotColor: '#b90c0c' },
  { label: 'الصحة', dotColor: '#5ed6c5' },
];

const sehaCareTabs = [
  { label: 'رعاية تمريضية', dotColor: '#b90c0c' },
  { label: 'الصحة', dotColor: '#5ed6c5' },
];

export default function HealthPage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <HealthHero />

        {/* Client showcases */}
        <section className="bg-on-dark" aria-label="أعمالنا في قطاع الصحة" dir="rtl">
          {/* Medvision */}
          <ClientShowcase
            title="ميدفيجن Medvision"
            tabs={medvisionTabs}
            postsImage1="/assets/health-medvision-posts-1.svg"
            postsImage1Alt="أعمال ميدفيجن - الجزء الأول"
            postsImage2="/assets/health-medvision-posts-2.svg"
            postsImage2Alt="أعمال ميدفيجن - الجزء الثاني"
            reels={medvisionReels}
          />

          {/* Divider */}
          <div className="w-full h-px bg-white/5 mx-auto max-w-[1390px]" aria-hidden="true" />

          {/* Seha Care */}
          <ClientShowcase
            title="صحة كير Seha Care"
            tabs={sehaCareTabs}
            postsImage1="/assets/health-sehacare-posts-1.svg"
            postsImage1Alt="أعمال صحة كير - الجزء الأول"
            postsImage2="/assets/health-sehacare-posts-2.svg"
            postsImage2Alt="أعمال صحة كير - الجزء الثاني"
            reels={sehaCareReels}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
