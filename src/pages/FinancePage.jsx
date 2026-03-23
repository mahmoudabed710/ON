import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FinanceHero from '../components/finance/FinanceHero';
import ClientShowcase from '../components/health/ClientShowcase';

const mpaTabs = [
  { label: 'الخدمات المالية والمهنية', dotColor: '#b90c0c' },
  { label: 'المحاسبة', dotColor: '#5ed6c5' },
];

export default function FinancePage() {
  return (
    <div className="bg-on-dark min-h-screen">
      <Navbar />
      <main>
        <FinanceHero />

        <section className="bg-on-dark" aria-label="أعمالنا في قطاع الخدمات المالية والمهنية" dir="rtl">
          <ClientShowcase
            title="MPA"
            tabs={mpaTabs}
            postsImage1="/assets/finance-mpa-posts-1.svg"
            postsImage1Alt="أعمال MPA - الجزء الأول"
            postsImage2="/assets/finance-mpa-posts-2.svg"
            postsImage2Alt="أعمال MPA - الجزء الثاني"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
