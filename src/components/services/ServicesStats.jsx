import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

function CountUp({ value, duration = 1600 }) {
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/\d/g, '');
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * numericValue));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: 'نجاحنا', value: '89%', description: 'نسبة الاحتفاظ بالعملاء' },
  { label: 'عميل', value: '50+', description: 'خبرة واسعة في إطلاق الحملات' },
  { label: 'خبرتنا', value: '3+', description: 'خبرة تبلورت على مدار ٣ سنوات.' },
  { label: 'الموظفيين', value: '25+', description: 'كفاءات متخصصة تمتد لـ ٣ دول' },
];

export default function ServicesStats() {
  const contentRef = useScrollAnimation(0.1);

  return (
    <section className="relative bg-on-teal" aria-label="أرقام تعكس نمو أعمال عملائنا" dir="rtl">
      {/* Bottom wave — back to dark */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-[0]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-[90px] block"
        >
          <path
            d="M0,50 C240,10 480,90 720,45 C960,0 1200,90 1440,0 L1440,90 L0,90 Z"
            fill="var(--color-on-dark)"
          />
        </svg>
      </div>

      <div
        ref={contentRef}
        className="section-fade relative z-10 max-w-[1390px] mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-32"
      >
        {/* Section heading with lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="block w-[50px] h-[1.5px] bg-on-darker/40" aria-hidden="true" />
          <h2
            className="font-tajawal font-medium text-on-darker text-center whitespace-nowrap"
            style={{ fontSize: 'clamp(16px, 1.8vw, 24px)' }}
          >
            أرقام تعكس نمو أعمال عملائنا
          </h2>
          <span className="block w-[50px] h-[1.5px] bg-on-darker/40" aria-hidden="true" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-4">
              {/* Label */}
              <span
                className="font-tajawal font-bold text-[#f0f0f0]"
                style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
              >
                {stat.label}
              </span>

              {/* Number */}
              <span
                className="font-[family-name:var(--font-epilogue)] font-semibold text-[#f0f0f0] leading-none"
                style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
              >
                <CountUp value={stat.value} />
              </span>

              {/* Description */}
              <span
                className="font-tajawal font-normal text-text-muted leading-snug max-w-[200px]"
                style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}
              >
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
