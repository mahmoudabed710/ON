import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const headingRef = useScrollAnimation(0.2);
  const cardsRef = useScrollAnimation(0.15);

  return (
    <section
      id="about"
      className="bg-on-dark py-20 overflow-hidden relative"
      aria-label="تعرف علينا"
    >
      {/* Section heading */}
      <div ref={headingRef} className="section-fade text-center mb-12 px-6">
        <h2 className="font-tajawal font-extrabold text-on-teal"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          تعرف علينا
        </h2>
      </div>

      {/* Cards with watermark text */}
      <div ref={cardsRef} className="section-fade relative px-4 md:px-0">
        {/* Top watermark row */}
        <div
          className="watermark-text text-center absolute top-0 inset-x-0 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          تـعـرف
        </div>

        {/* Portrait cards — centered */}
        <div className="flex justify-center items-center gap-4 md:gap-6 relative z-10 py-12">
          {/* White / light card */}
          <div
            className="rounded-[20px] overflow-hidden flex-shrink-0 shadow-2xl"
            style={{ width: 'clamp(160px, 20vw, 285px)', aspectRatio: '285/506' }}
          >
            <img
              src="/assets/about-white.png"
              alt="فريق ON Digital Solutions - الحضور الرقمي"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Green teal card */}
          <div
            className="rounded-[20px] overflow-hidden flex-shrink-0 shadow-2xl"
            style={{ width: 'clamp(160px, 20vw, 285px)', aspectRatio: '285/506' }}
          >
            <img
              src="/assets/about-green.png"
              alt="فريق ON Digital Solutions - الإبداع الرقمي"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom watermark row */}
        <div
          className="watermark-text text-center absolute bottom-0 inset-x-0 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          عـلـيـنا
        </div>
      </div>
    </section>
  );
}
