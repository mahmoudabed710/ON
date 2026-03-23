import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    id: 'social',
    number: '01',
    title: 'إدارة منصات التواصل',
    description:
      'نبني حضورك الرقمي على جميع المنصات الاجتماعية من خلال استراتيجيات مدروسة وإدارة احترافية يومية لتحقيق أعلى مستويات التفاعل والوصول.',
  },
  {
    id: 'content',
    number: '02',
    title: 'صناعة المحتوى & التصوير',
    description:
      'نُنتج محتوى إبداعياً يحكي قصة علامتك التجارية بصرياً ونصياً، من مقاطع فيديو احترافية إلى تصوير منتجات يعكس جودتك الحقيقية.',
  },
  {
    id: 'design',
    number: '03',
    title: 'التصميم والهوية',
    description:
      'نصمم هويات بصرية متكاملة تعكس قيمك وتميزك في السوق، من الشعار والألوان إلى كل لمسة بصرية تمثل علامتك.',
  },
  {
    id: 'campaigns',
    number: '04',
    title: 'الحملات التسويقية',
    description:
      'نخطط وننفذ حملات رقمية مدفوعة وعضوية موجهة بدقة لجمهورك المستهدف، مع متابعة مستمرة وتحسين لضمان أعلى عائد على الاستثمار.',
  },
];

function ServiceRow({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/15 last:border-b-0">
      <button
        className="w-full flex items-center gap-4 md:gap-8 py-8 md:py-10 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-on-teal"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`service-desc-${service.id}`}
      >
        {/* ⊕ / × icon — leftmost in LTR layout (start in RTL) */}
        <span
          className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full border border-text-muted text-text-muted transition-all duration-300 group-hover:border-on-teal group-hover:text-on-teal"
          aria-hidden="true"
        >
          {open ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
            </svg>
          )}
        </span>

        {/* Service title — grows to fill center */}
        <span
          className="flex-1 text-center font-tajawal font-medium text-text-light group-hover:text-on-teal transition-colors duration-300"
          style={{ fontSize: 'clamp(20px, 3.5vw, 48px)' }}
        >
          {service.title}
        </span>

        {/* Large teal number — rightmost, overflows vertically */}
        <span
          className="shrink-0 font-[family-name:var(--font-epilogue)] font-normal text-on-teal-light leading-none select-none transition-opacity duration-300"
          style={{ fontSize: 'clamp(60px, 14vw, 200px)', opacity: open ? 1 : 0.7 }}
          aria-hidden="true"
        >
          {service.number}
        </span>
      </button>

      {/* Expandable description */}
      <div
        id={`service-desc-${service.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`}
      >
        <p
          className="font-tajawal font-normal text-text-muted text-center max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}
          dir="rtl"
        >
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesList() {
  const ref = useScrollAnimation(0.05);

  return (
    <section
      className="bg-on-dark pt-20 pb-24 overflow-hidden"
      aria-label="قائمة الخدمات"
      dir="rtl"
    >
      <div
        ref={ref}
        className="section-fade max-w-[1390px] mx-auto px-4 md:px-8 lg:px-14 border-t border-white/15"
      >
        {services.map((service, i) => (
          <ServiceRow key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
