import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MOUNTAIN_PHOTO =
  'https://images.pexels.com/photos/1576938/pexels-photo-1576938.jpeg';

export default function MountainSection() {
  const textRef = useScrollAnimation(0.2);

  return (
    <section
      className="relative bg-on-darker overflow-hidden"
      style={{ minHeight: '60vh' }}
      aria-label="معاً نصعد إلى القمة"
    >
      {/* Mountain photo — fills left portion */}
      <div className="absolute inset-0">
        <img
          src={MOUNTAIN_PHOTO}
          alt="متسلق جبل يحمل علماً في القمة"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: transparent on left, dark on right (RTL: content side) */}
        <div className="absolute inset-0 bg-gradient-to-l from-on-darker via-on-darker/60 to-transparent" />
        {/* Teal tint at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-on-darker to-transparent" />
      </div>

      {/* Tagline text — on the right / start side in RTL */}
      <div
        ref={textRef}
        className="relative z-10 section-fade min-h-[60vh] flex items-center justify-start px-6 md:px-10 lg:px-16 py-20"
      >
        <h2
          className="font-tajawal font-extrabold leading-tight text-on-teal"
          style={{
            fontSize: 'clamp(28px, 4vw, 56px)',
            lineHeight: 1.5,
            opacity: 0.85,
            maxWidth: '520px',
          }}
        >
          معاً، نصعد بعلامتك التجارية إلى القمة.
        </h2>
      </div>
    </section>
  );
}
