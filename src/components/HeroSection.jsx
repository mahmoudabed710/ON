import { useEffect, useRef, useState } from 'react';

const HERO_PHOTO =
  'https://pixabay.com/get/g6068b99de6fad0c9c7e0eb2b25f2a3dd76ac5439c15f3f08d94cba860239851daaaec5bb43e67a4864ee730be209d036.jpg';

function CountUp({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const start = performance.now();
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-label="القسم الرئيسي"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Person photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_PHOTO})` }}
        />
        {/* Dark gradient overlay — stronger on the start (right) side */}
        <div className="absolute inset-0 bg-gradient-to-l from-on-darker/50 via-on-dark/70 to-on-darker/95" />
        {/* Light leak overlay */}
        <img
          src="/assets/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none"
          aria-hidden="true"
        />
        {/* Teal glow at top */}
        <div className="absolute top-0 inset-x-0 h-2 bg-on-teal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-[87px]">
        <div className="flex-1 flex items-center justify-start px-6 md:px-10 lg:px-16 py-12">
          {/* Text content — at the start (right) in RTL */}
          <div className="max-w-[660px] w-full animate-[fadeInDown_0.8s_ease_forwards]">
            {/* Subtitle */}
            <p className="font-tajawal text-[16px] md:text-[20px] lg:text-[24px] font-medium leading-[1.5] text-text-muted mb-6 max-w-[600px]">
              حلول تسويقية متكاملة؛ من تصميم الهوية والمحتوى إلى إدارة الحملات
              بذكاء، لنحقق لعلامتك نمواً حقيقياً.
            </p>

            {/* Headline */}
            <h1 className="font-tajawal font-medium leading-tight mb-4" dir="rtl">
              <span className="block text-[40px] sm:text-[52px] lg:text-[62px] text-text-light">
                نـترجم طموحك إلى
              </span>
              <span className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-[44px] sm:text-[58px] lg:text-[62px] font-extrabold text-on-teal-light">
                  أرقـام
                </span>
                <span className="text-[40px] sm:text-[52px] lg:text-[62px] font-medium text-text-light">
                  تفوق التوقعات
                </span>
              </span>
            </h1>

            {/* CTA Button */}
            <a
              href="#contact"
              className="teal-btn mt-6 w-fit"
              aria-label="احجز استشارة مجانية"
            >
              <span>احجز استشارة</span>
              <img
                src="/assets/arrow.svg"
                alt=""
                className="w-5 h-4 brightness-0 invert"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar: stats (left/end in RTL) + scroll indicator (right/start in RTL) */}
        <div className="flex justify-between items-end px-6 md:px-10 lg:px-14 pb-10">

          {/* Scroll indicator — first child → right side in RTL */}
          <div className="flex flex-col items-center gap-2 text-text-muted animate-bounce">
            <span className="font-tajawal text-sm">اسحب لأسفل</span>
            <div className="w-9 h-9 rounded-full border border-text-muted flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Stats group — last child → left side in RTL */}
          <div className="flex items-end gap-4 lg:gap-8">
            {/* 50+ stat — first in RTL group → right side */}
            <div className="text-end">
              <p className="font-vietnam text-[36px] lg:text-[48px] font-semibold text-white leading-none">
                <CountUp target={50} />+
              </p>
              <p className="font-tajawal text-[14px] lg:text-[18px] font-medium text-text-muted max-w-[160px] leading-snug mt-1">
                أكثر من 50 عميل يحققون أرباح شهرية
              </p>
            </div>

            {/* Stats card — last in RTL group → left side (far left) */}
            <div
              className="rounded-[26px] p-4 lg:p-6 backdrop-blur-sm text-end"
              style={{
                background:
                  'linear-gradient(180deg, rgba(32,36,37,0.81) 0%, rgba(56,61,62,0.81) 100%)',
                width: 'clamp(200px, 22vw, 284px)',
              }}
            >
              <p className="font-vietnam text-[36px] lg:text-[48px] font-semibold text-white leading-none">
                98.5%
              </p>
              <p className="font-tajawal text-[14px] lg:text-[18px] font-medium text-[#e0e0e0] leading-snug mt-1">
                حققت الحملات التسويقية نسبة نجاح ٩٨٪.
              </p>
              {/* Bar chart visual */}
              <div className="mt-4">
                <img
                  src="/assets/hero-chart.svg"
                  alt="مخطط بياني يوضح نسبة النجاح"
                  className="w-full h-auto max-h-[80px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
