import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function RealEstateHero() {
  const contentRef = useScrollAnimation(0.1);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '679px', borderRadius: '0 0 40px 40px' }}
      aria-label="العقارات"
      dir="rtl"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/real-estate-hero-bg.png')" }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,14,15,0.55) 0%, rgba(11,14,15,0.45) 60%, rgba(11,14,15,0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="section-fade relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[160px] pb-24"
      >
        <h1
          className="font-tajawal font-extrabold text-on-teal leading-tight mb-4"
          style={{ fontSize: 'clamp(40px, 7vw, 88px)', lineHeight: '1.05' }}
        >
          العقارات
        </h1>

        <p
          className="font-tajawal font-medium text-text-muted max-w-[600px]"
          style={{ fontSize: 'clamp(16px, 2vw, 24px)' }}
        >
          حلول تسويقية مبتكرة لتحويل مشاريعك العقارية إلى قصص نجاح رقمية.
        </p>
      </div>
    </section>
  );
}
