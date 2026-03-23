import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarsHero from '../components/cars/CarsHero';
import ClientShowcase from '../components/health/ClientShowcase';

const motorShowTabs = [
  { label: 'السيارات', dotColor: '#5ed6c5' },
];

export default function CarsPage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <CarsHero />

        <section className="bg-on-dark" aria-label="أعمالنا في قطاع السيارات" dir="rtl">
          <ClientShowcase
            title="موتور شو"
            tabs={motorShowTabs}
            postsImage1="/assets/cars-motorshow-posts.svg"
            postsImage1Alt="أعمال موتور شو - معرض السيارات"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
