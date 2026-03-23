import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ExploreSection() {
  const cardRef = useScrollAnimation(0.15);

  return (
    <section
      className="bg-on-dark px-4 md:px-8 lg:px-12 py-6 md:py-10"
      aria-label="استكشف مجالات خبرتنا"
      dir="rtl"
    >
      <div
        ref={cardRef}
        className="section-fade relative overflow-hidden rounded-[40px] md:rounded-[50px] mx-auto"
        style={{
          background: 'linear-gradient(135deg, #131a1c 0%, #1a2320 60%, #0d1a17 100%)',
          maxWidth: '1390px',
          minHeight: 'clamp(240px, 30vw, 460px)',
        }}
      >
        {/* Grid pattern — right side */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 md:w-2/5 pointer-events-none"
          aria-hidden="true"
        >
          <img
            src="/assets/portfolio-grid-pattern.svg"
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Text — centered */}
        <div className="relative z-10 flex items-center justify-center h-full min-h-[inherit] px-8 md:px-20 py-14 md:py-20">
          <h2
            className="font-tajawal font-medium text-text-light text-center leading-snug"
            style={{ fontSize: 'clamp(24px, 4.5vw, 57px)', lineHeight: '1.8' }}
          >
            استكشف العوالم المتعددة
            <br />
            لمجالات خبرتنا التسويقية
          </h2>
        </div>
      </div>
    </section>
  );
}
