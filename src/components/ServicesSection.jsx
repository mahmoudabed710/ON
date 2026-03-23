import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: '/assets/icon-marketing.svg',
    title: 'الحملات التسويقية',
    desc: 'وضع خطة تسويقية مبنية على أهدافك، وننفذ حملات إعلانية مدفوعة لرفع الوعي',
    alt: 'أيقونة الحملات التسويقية',
  },
  {
    icon: '/assets/icon-design.svg',
    title: 'التصميم والهوية',
    desc: 'هوية بصرية متكاملة وتصميمات إبداعية تضمن لك حضوراً رقمياً يخطف الأنظار.',
    alt: 'أيقونة التصميم والهوية',
  },
  {
    icon: '/assets/icon-content.svg',
    title: 'صناعة المحتوى & تصوير',
    desc: 'صناعة محتوى إبداعي متكامل (نصوص، تصوير، Reels، وموشن جرافيك)',
    alt: 'أيقونة صناعة المحتوى',
  },
  {
    icon: '/assets/icon-social.svg',
    title: 'إدارة منصات التواصل',
    desc: 'إدارة شاملة لحساباتك؛ من صناعة المحتوى إلى التفاعل وبناء مجتمعك الرقمي.',
    alt: 'أيقونة إدارة منصات التواصل',
  },
];

export default function ServicesSection() {
  const headerRef = useScrollAnimation(0.2);
  const cardsRef = useScrollAnimation(0.1);

  return (
    <section
      id="services"
      className="bg-on-dark py-20 px-6 md:px-10 lg:px-16"
      aria-label="خدماتنا"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header — right-aligned in RTL */}
        <div ref={headerRef} className="section-fade mb-12">
          <h2
            className="font-tajawal font-extrabold text-on-teal text-end"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            خدماتنا
          </h2>
          <p className="font-tajawal text-[18px] md:text-[24px] font-normal text-text-muted text-center mt-3 max-w-4xl mx-auto">
            استراتيجيات تسويقية مبنية على تحليل البيانات، مصممة خصيصاً لمضاعفة
            مبيعاتك وتوسيع نطاق أعمالك.
          </p>

          {/* CTA button — right-aligned */}
          <div className="flex justify-end mt-8">
            <a href="#contact" className="teal-btn">
              <span>اطـلـب الخـدمـة</span>
              <img
                src="/assets/arrow.svg"
                alt=""
                className="w-5 h-4 brightness-0 invert"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Service cards grid */}
        <div
          ref={cardsRef}
          className="section-fade grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {services.map((service, i) => (
            <article
              key={i}
              className="service-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-end">
                <img
                  src={service.icon}
                  alt={service.alt}
                  className="w-[120px] h-[100px] object-contain"
                  style={{ filter: 'brightness(0.3)' }}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-3 text-end">
                <h3
                  className="font-tajawal font-bold text-text-dark"
                  style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
                >
                  {service.title}
                </h3>
                <p className="font-tajawal text-[14px] md:text-[16px] font-normal text-text-darker leading-[24px]">
                  {service.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
