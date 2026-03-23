import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function PortfolioHero() {
  const textRef = useScrollAnimation(0.1);

  return (
    <section
      className="relative bg-on-dark overflow-hidden pt-[87px] pb-24 md:pb-36 flex flex-col items-center"
      aria-label="مختارات من أعمالنا"
      dir="rtl"
    >
      {/* Teal blur ellipse background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[585px] h-[233px] pointer-events-none"
        style={{
          background: 'rgba(94, 214, 197, 0.56)',
          filter: 'blur(120px)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      {/* Globe image */}
      <div className="relative z-10 mt-6 mb-8 flex justify-center">
        <img
          src="/assets/portfolio-globe.png"
          alt="كرة ثلاثية الأبعاد تمثل عالمنا التسويقي"
          className="w-[clamp(220px,36vw,463px)] h-auto object-contain drop-shadow-2xl animate-[floatGlobe_4s_ease-in-out_infinite]"
          loading="eager"
        />
      </div>

      {/* Text */}
      <div
        ref={textRef}
        className="section-fade relative z-10 flex flex-col items-center text-center px-6 max-w-[800px]"
      >
        <h1
          className="font-tajawal font-extrabold text-white leading-tight mb-3"
          style={{ fontSize: 'clamp(38px, 7vw, 88px)', lineHeight: '1.05' }}
        >
          مختارات من أعمالنا
        </h1>
        <p
          className="font-tajawal font-medium text-text-muted leading-relaxed max-w-[600px]"
          style={{ fontSize: 'clamp(16px, 2vw, 24px)', lineHeight: '1.9' }}
        >
          تصفح أبرز حملاتنا الإعلانية واستراتيجياتنا التي حولت أهداف عملائنا إلى نتائج ملموسة ونجاح مستدام.
        </p>
      </div>

      <style>{`
        @keyframes floatGlobe {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
