import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EducationHero from '../components/education/EducationHero';
import ClientShowcase from '../components/health/ClientShowcase';

/* ── Riwaa ── */
const riwaaTabs = [
  { label: 'منصة تعليمية', dotColor: '#b90c0c' },
  { label: 'تربية', dotColor: '#5ed6c5' },
];

const riwaaReels = [
  {
    thumbnail: 'https://picsum.photos/seed/riwaa-reel1/300/534',
    alt: 'رواء - رحلة تربوية مع الأطفال',
  },
  {
    thumbnail: 'https://picsum.photos/seed/riwaa-reel2/300/534',
    alt: 'رواء - محتوى تعليمي',
  },
  {
    thumbnail: 'https://picsum.photos/seed/riwaa-reel3/300/534',
    alt: 'رواء - لحظات ملهمة',
  },
];

/* ── Khayal Tech ── */
const khayalTabs = [
  { label: 'الأطفال', dotColor: '#b90c0c' },
  { label: 'تربية', dotColor: '#5ed6c5' },
];

const khayalReels = [
  {
    thumbnail: '/assets/education-khayal-reel-1.svg',
    alt: 'خيال تيك - رسوم متحركة وإبداع رقمي',
  },
  {
    thumbnail: '/assets/education-khayal-reel-2.svg',
    alt: 'خيال تيك - مشاهد ملهمة',
  },
];

/* ── Bniyan Academy ── */
const bniyanTabs = [
  { label: 'تعليم', dotColor: '#b90c0c' },
  { label: 'تربية', dotColor: '#5ed6c5' },
];

export default function EducationPage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <EducationHero />

        <section className="bg-on-dark" aria-label="أعمالنا في قطاع التعليم والتربية" dir="rtl">

          {/* Riwaa */}
          <ClientShowcase
            title="رواء Riwaa"
            tabs={riwaaTabs}
            postsImage1="/assets/education-riwaa-posts-1.svg"
            postsImage1Alt="أعمال رواء - الجزء الأول"
            postsImage2="/assets/education-riwaa-posts-2.svg"
            postsImage2Alt="أعمال رواء - الجزء الثاني"
            reels={riwaaReels}
          />

          <div className="w-full h-px bg-white/5 mx-auto max-w-[1390px]" aria-hidden="true" />

          {/* Khayal Tech */}
          <ClientShowcase
            title="خيال تيك Khayal Tech"
            tabs={khayalTabs}
            postsImage1="/assets/education-khayal-posts-1.svg"
            postsImage1Alt="أعمال خيال تيك - الجزء الأول"
            postsImage2="/assets/education-khayal-posts-2.svg"
            postsImage2Alt="أعمال خيال تيك - الجزء الثاني"
            reels={khayalReels}
          />

          <div className="w-full h-px bg-white/5 mx-auto max-w-[1390px]" aria-hidden="true" />

          {/* Bniyan Academy */}
          <ClientShowcase
            title="أكاديمية بنيان"
            tabs={bniyanTabs}
            postsImage1="/assets/education-bniyan-posts.svg"
            postsImage1Alt="أعمال أكاديمية بنيان"
          />

        </section>
      </main>
      <Footer />
    </div>
  );
}
