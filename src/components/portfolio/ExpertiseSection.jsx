import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const categories = [
  {
    id: 'health',
    label: 'الصحة',
    image: '/assets/portfolio-doctors.jpg',
    alt: 'فريق طبي متخصص',
    href: '/health',
  },
  {
    id: 'realestate',
    label: 'العقارات',
    image: '/assets/portfolio-building.png',
    alt: 'مبنى عقاري حديث',
  },
  {
    id: 'education',
    label: 'التعليم والتربية',
    image: 'https://picsum.photos/seed/education/545/374',
    alt: 'تعليم وتربية',
  },
  {
    id: 'apps',
    label: 'التطبيقات والتقنية',
    image: 'https://picsum.photos/seed/apps/545/374',
    alt: 'تطبيقات وتقنية',
  },
  {
    id: 'development',
    label: 'التطوير والتأثير',
    image: 'https://picsum.photos/seed/development/545/374',
    alt: 'تطوير وتأثير',
  },
];

export default function ExpertiseSection() {
  const [activeId, setActiveId] = useState('health');
  const headerRef = useScrollAnimation(0.1);
  const contentRef = useScrollAnimation(0.08);

  const activeCategory = categories.find((c) => c.id === activeId);
  const secondCategory =
    categories[(categories.findIndex((c) => c.id === activeId) + 1) % categories.length];

  return (
    <section
      className="bg-on-dark py-16 md:py-24 overflow-hidden"
      aria-label="مجالات خبرتنا"
      dir="rtl"
    >
      <div className="max-w-[1390px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div ref={headerRef} className="section-fade text-end mb-10 md:mb-16">
          <h2
            className="font-tajawal font-extrabold text-on-teal"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
          >
            مجالات خبرتنا
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          ref={contentRef}
          className="section-fade flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-16"
        >
          {/* LEFT — stacked images (first in RTL source → appears on right in RTL, but we want it on left visually) */}
          {/* Using flex-col-reverse on mobile, lg:flex-row: images go left, categories go right */}
          <div className="relative w-full lg:w-[45%] flex flex-col gap-5">
            {/* Top gradient fade */}
            <div
              className="absolute top-0 inset-x-0 h-[100px] pointer-events-none z-10"
              style={{
                background:
                  'linear-gradient(180deg, rgba(11,14,15,1) 0%, rgba(11,14,15,0) 100%)',
              }}
              aria-hidden="true"
            />

            {/* Primary image */}
            <div className="overflow-hidden rounded-[32px] transition-all duration-500">
              <img
                key={activeCategory.id}
                src={activeCategory.image}
                alt={activeCategory.alt}
                className="w-full object-cover animate-[imgFadeIn_0.5s_ease_forwards]"
                style={{ height: 'clamp(200px, 30vw, 374px)' }}
                loading="lazy"
              />
            </div>

            {/* Secondary image (next category preview) */}
            <div className="overflow-hidden rounded-[32px] transition-all duration-500">
              <img
                key={secondCategory.id + '-preview'}
                src={secondCategory.image}
                alt={secondCategory.alt}
                className="w-full object-cover opacity-60 grayscale animate-[imgFadeIn_0.5s_ease_forwards]"
                style={{ height: 'clamp(100px, 15vw, 192px)' }}
                loading="lazy"
              />
            </div>

            {/* Bottom gradient fade */}
            <div
              className="absolute bottom-0 inset-x-0 h-[120px] pointer-events-none z-10"
              style={{
                background:
                  'linear-gradient(0deg, rgba(11,14,15,1) 0%, rgba(11,14,15,0) 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* RIGHT — category list */}
          <div className="relative w-full lg:w-[55%] flex flex-col items-end">
            {/* Subtract background pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              aria-hidden="true"
            >
              <img
                src="/assets/portfolio-subtract.svg"
                alt=""
                className="w-full h-full object-contain object-left-top"
              />
            </div>

            <ul className="relative z-10 flex flex-col gap-2 w-full text-end" role="list">
              {categories.map((cat) => {
                const isActive = cat.id === activeId;
                return (
                  <li key={cat.id}>
                    {cat.href ? (
                      <Link
                        to={cat.href}
                        onClick={() => setActiveId(cat.id)}
                        className={`block w-full text-end font-tajawal font-medium transition-all duration-300 leading-tight py-2 pr-2 rounded-lg hover:text-text-light focus:outline-none focus-visible:ring-2 focus-visible:ring-on-teal ${
                          isActive
                            ? 'text-text-light opacity-100 scale-105 origin-right'
                            : 'text-text-darker opacity-70 hover:opacity-90'
                        }`}
                        style={{ fontSize: 'clamp(20px, 3.2vw, 48px)' }}
                      >
                        {cat.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => setActiveId(cat.id)}
                        aria-pressed={isActive}
                        className={`w-full text-end font-tajawal font-medium transition-all duration-300 leading-tight py-2 pr-2 rounded-lg hover:text-text-light focus:outline-none focus-visible:ring-2 focus-visible:ring-on-teal ${
                          isActive
                            ? 'text-text-light opacity-100 scale-105 origin-right'
                            : 'text-text-darker opacity-70 hover:opacity-90'
                        }`}
                        style={{ fontSize: 'clamp(20px, 3.2vw, 48px)' }}
                      >
                        {cat.label}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
