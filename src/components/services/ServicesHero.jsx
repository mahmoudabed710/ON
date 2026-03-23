import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ServicesHero() {
  const contentRef = useScrollAnimation(0.1);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '740px' }}
      aria-label="خدماتنا"
      dir="rtl"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/services-hero-bg.png')" }}
        aria-hidden="true"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-on-dark/70" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,14,15,0.5) 0%, rgba(11,14,15,0.3) 50%, rgba(11,14,15,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="section-fade relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[130px] pb-28"
      >
        <h1
          className="font-tajawal font-extrabold text-on-teal leading-tight mb-4"
          style={{ fontSize: 'clamp(40px, 7vw, 88px)', lineHeight: '1.05' }}
        >
          خـدماتـنـا
        </h1>

        <p
          className="font-tajawal font-medium text-text-muted mb-10 max-w-[680px]"
          style={{ fontSize: 'clamp(16px, 2vw, 24px)' }}
        >
          كل ما تحتاجه من حلول تسويقية مبتكرة لنمو وتوسع أعمالك.
        </p>

        {/* CTA button */}
        <a
          href="/#contact"
          className="inline-flex items-center gap-3 bg-on-teal text-white font-tajawal font-extrabold rounded-[30px] px-7 py-3 transition-all duration-300 hover:bg-on-teal-light hover:scale-105 active:scale-95"
          style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}
          aria-label="احجز استشارة مجانية"
        >
          احجز استشارة
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-on-darker/50 bg-white/10 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>

      {/* Bottom wave — teal bleeds up */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-[0] rotate-180" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-[90px] block"
        >
          <path
            d="M0,0 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z"
            fill="var(--color-on-teal)"
          />
        </svg>
      </div>
    </section>
  );
}
