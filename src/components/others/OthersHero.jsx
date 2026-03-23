import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function OthersHero() {
  const contentRef = useScrollAnimation(0.1);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '679px', borderRadius: '0 0 40px 40px' }}
      aria-label="أخرى"
      dir="rtl"
    >
      {/* Background — diverse sectors photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/others-hero-bg.png')" }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,14,15,0.50) 0%, rgba(11,14,15,0.40) 55%, rgba(11,14,15,0.80) 100%)',
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
          style={{ fontSize: 'clamp(44px, 7.5vw, 88px)', lineHeight: '1.05' }}
        >
          أخرى
        </h1>

        <p
          className="font-tajawal font-medium text-text-muted max-w-[560px]"
          style={{ fontSize: 'clamp(15px, 1.8vw, 24px)' }}
        >
          حلول تسويقية مبتكرة لقطاعات متنوعة.
        </p>
      </div>
    </section>
  );
}
