import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PartnersSection() {
  const ref = useScrollAnimation(0.2);

  return (
    <section
      className="bg-on-section py-12 px-6"
      aria-label="شركاؤنا"
    >
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        {/* Heading with teal lines */}
        <div className="flex items-center justify-center gap-5 mb-10">
          <div className="flex-1 max-w-[50px] h-[2px] bg-on-teal-light rounded-full" />
          <h2 className="font-tajawal font-medium text-[20px] md:text-[24px] text-text-light whitespace-nowrap">
            بعض شركائنا الذين وثقوا بنا
          </h2>
          <div className="flex-1 max-w-[50px] h-[2px] bg-on-teal-light rounded-full" />
        </div>

        {/* Partners logos */}
        <div className="flex items-center justify-center">
          <img
            src="/assets/partners-logos.svg"
            alt="شركاؤنا: New Town، MPA، Ezdan، بيّنهم، Khayaltech، Ezdan Mall، آت"
            className="w-full max-w-4xl h-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
          />
        </div>
      </div>
    </section>
  );
}
