import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const categories = ['الكل', 'الصحة', 'العقارات', 'التطبيقات والتقنية', 'الخدمات المالية', 'التعليم والتربية', 'أخرى'];

const portfolioItems = [
  {
    image: 'https://picsum.photos/id/1005/400/560',
    category: 'الصحة',
    alt: 'مشروع في قطاع الصحة',
  },
  {
    image: 'https://picsum.photos/id/164/400/560',
    category: 'العقارات',
    alt: 'مشروع في قطاع العقارات',
  },
  {
    image: 'https://picsum.photos/id/160/400/560',
    category: 'التطبيقات والتقنية',
    alt: 'مشروع في قطاع التطبيقات والتقنية',
  },
  {
    image: 'https://picsum.photos/id/1072/400/560',
    category: 'الخدمات المالية',
    alt: 'مشروع في قطاع الخدمات المالية',
  },
  {
    image: 'https://picsum.photos/id/1027/400/560',
    category: 'التعليم والتربية',
    alt: 'مشروع في قطاع التعليم والتربية',
  },
  {
    image: 'https://picsum.photos/id/1062/400/560',
    category: 'أخرى',
    alt: 'مشاريع أخرى متنوعة',
  },
  
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const headerRef = useScrollAnimation(0.2);
  const gridRef = useScrollAnimation(0.1);

  const filtered =
    activeCategory === 'الكل'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="bg-on-darker pb-0 overflow-hidden"
      style={{ borderRadius: '0 0 40px 40px' }}
      aria-label="مختارات من أعمالنا"
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="section-fade flex items-end justify-between px-6 md:px-10 lg:px-16 pt-20 pb-10"
      >
        {/* "عرض الكل" — last child → LEFT in RTL */}
        <button
          className="font-tajawal text-[18px] md:text-[20px] font-normal text-text-muted hover:text-on-teal transition-colors underline-offset-4 hover:underline"
          onClick={() => setActiveCategory('الكل')}
        >
          عرض الكل
        </button>

        {/* Heading — first child → RIGHT in RTL */}
        <h2
          className="font-tajawal font-extrabold text-on-teal text-end"
          style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
        >
          مختارات من أعمالنا
        </h2>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap justify-end gap-2 px-6 md:px-10 lg:px-16 pb-10 scrollbar-hidden overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full font-tajawal text-sm md:text-base font-bold uppercase transition-all duration-200 whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-on-teal text-white'
                : 'bg-on-section text-text-muted hover:bg-on-teal/20 hover:text-on-teal'
            }`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div
        ref={gridRef}
        className="section-fade grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0"
      >
        {filtered.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden cursor-pointer"
            style={{ aspectRatio: '2/3' }}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
            {/* Category overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3 text-center">
              <span className="font-tajawal font-extrabold text-white text-sm md:text-base uppercase">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Teal strip at bottom */}
      <div className="w-full h-[60px] bg-on-teal flex items-center justify-center">
        <div className="w-full max-w-7xl px-6 flex items-center justify-center gap-6">
          {portfolioItems.map((item, i) => (
            <span
              key={i}
              className="font-tajawal font-extrabold text-white text-sm uppercase hidden md:block opacity-80"
            >
              {item.category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
