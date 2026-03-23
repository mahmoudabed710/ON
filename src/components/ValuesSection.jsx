import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: '/assets/icon-speed.svg',
    title: 'السرعة',
    desc: 'نؤمن بأن الوقت هو أغلى الموارد؛ لذا نتحرك بسرعة وكفاءة لتلبية احتياجات شركائنا ومواكبة التغيرات.',
    alt: 'أيقونة السرعة',
  },
  {
    icon: '/assets/icon-innovation.svg',
    title: 'الابتكار والإبداع',
    desc: 'نرتكز في عملنا على تقديم حلول غير تقليدية، حيث نسخر الإبداع لتطوير منصة تسبق تطلعات المستخدمين.',
    alt: 'أيقونة الابتكار',
  },
  {
    icon: '/assets/icon-growth.svg',
    title: 'تحقيق النمو',
    desc: 'هدفنا النهائي هو تمكين شركائنا من الوصول إلى أقصى إمكاناتهم من خلال استراتيجيات نمو ذكية ومدروسة.',
    alt: 'أيقونة النمو',
  },
  {
    icon: '/assets/icon-commitment.svg',
    title: 'الإلتزام',
    desc: 'نحن ملتزمون بالعمل جنباً إلى جنب مع شركائنا لتطوير استراتيجيات مبتكرة تحقق لهم النمو والتوسع المستدام.',
    alt: 'أيقونة الالتزام',
  },
];

export default function ValuesSection() {
  const ref = useScrollAnimation(0.1);

  return (
    <section
      className="bg-on-section py-20 px-6 md:px-10 lg:px-16"
      style={{ borderRadius: '0 0 40px 40px' }}
      aria-label="قيمنا"
    >
      <div ref={ref} className="section-fade max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Description — first child → RIGHT in RTL desktop */}
          <div className="lg:w-[38%] lg:pt-4 text-end">
            <h2
              className="font-tajawal font-extrabold text-on-teal mb-6"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
            >
              قيمنا
            </h2>
            <p
              className="font-tajawal font-normal text-text-muted"
              style={{ fontSize: 'clamp(16px, 1.6vw, 24px)', lineHeight: '1.8' }}
            >
              في ON قيمنا هي المحرك الأساسي لكل ما نقوم به. فهي التي تشكل
              تفاعلاتنا، قراراتنا، والطريقة التي نطور بها منصتنا.
            </p>
          </div>

          {/* 2×2 cards grid — last child → LEFT in RTL desktop */}
          <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <article key={i} className="value-card text-end" role="article">
                {/* Icon — top-left corner in RTL */}
                <div className="flex justify-start">
                  <img
                    src={v.icon}
                    alt={v.alt}
                    className="w-8 h-8 object-contain"
                    style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-tajawal font-medium text-[22px] text-[#f2f2f2] mt-2">
                  {v.title}
                </h3>

                {/* Divider */}
                <hr className="border-[#c4c4c4]/40 my-1" />

                {/* Description */}
                <p className="font-tajawal text-[15px] md:text-[18px] font-normal text-[#c4c4c4] leading-[1.7]">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
