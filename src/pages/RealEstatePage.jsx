import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RealEstateHero from '../components/real-estate/RealEstateHero';
import ClientShowcase from '../components/health/ClientShowcase';

const sharedTabs = [
  { label: 'شركة مقاولات', dotColor: '#b90c0c' },
  { label: 'العقارات', dotColor: '#5ed6c5' },
];

const newTownReels = [
  {
    thumbnail: 'https://picsum.photos/seed/newtown-interior/300/534',
    alt: 'مشروع نيو تاون - تشطيبات داخلية',
  },
  {
    thumbnail: 'https://picsum.photos/seed/newtown-exterior/300/534',
    alt: 'مشروع نيو تاون - منظر خارجي',
  },
];

const ezdanLandscapeReel = {
  thumbnail: 'https://picsum.photos/seed/ezdan-aerial/800/450',
  alt: 'مشروع إزدان - منظر جوي للمجمع السكني',
};

export default function RealEstatePage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <RealEstateHero />

        <section className="bg-on-dark" aria-label="أعمالنا في قطاع العقارات" dir="rtl">

          {/* New Town */}
          <ClientShowcase
            title="نيو تاون New Town"
            tabs={sharedTabs}
            postsImage1="/assets/real-estate-newtown-posts-1.svg"
            postsImage1Alt="أعمال نيو تاون - الجزء الأول"
            postsImage2="/assets/real-estate-newtown-posts-2.svg"
            postsImage2Alt="أعمال نيو تاون - الجزء الثاني"
            reels={newTownReels}
          />

          <div className="w-full h-px bg-white/5 mx-auto max-w-[1390px]" aria-hidden="true" />

          {/* Ezdan */}
          <ClientShowcase
            title="إزدان Ezdan"
            tabs={sharedTabs}
            postsImage1="/assets/real-estate-ezdan-posts.svg"
            postsImage1Alt="أعمال إزدان العقارية"
            landscapeReel={ezdanLandscapeReel}
          />

          <div className="w-full h-px bg-white/5 mx-auto max-w-[1390px]" aria-hidden="true" />

          {/* العراقة */}
          <ClientShowcase
            title="العراقة للمقاولات"
            tabs={sharedTabs}
            postsImage1="/assets/real-estate-araqa-posts.svg"
            postsImage1Alt="أعمال العراقة للمقاولات"
          />

          <div className="w-full h-px bg-white/5 mx-auto max-w-[1390px]" aria-hidden="true" />

          {/* Inception */}
          <ClientShowcase
            title="انسيبشن للمقاولات Inception"
            tabs={sharedTabs}
            postsImage1="/assets/real-estate-inception-posts.svg"
            postsImage1Alt="أعمال انسيبشن للمقاولات"
          />

        </section>
      </main>
      <Footer />
    </div>
  );
}
