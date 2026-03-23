import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Reusable client case-study block.
 * Shows title + filter tabs, one or two image grids, then a Reels sub-section.
 * Supports portrait reels (reels[]) and/or a single landscape reel (landscapeReel).
 */
export default function ClientShowcase({
  title,
  tabs = [],
  postsImage1,
  postsImage1Alt,
  postsImage2,
  postsImage2Alt,
  reels = [],
  landscapeReel = null, // { thumbnail, alt } — renders a 16:9 centered video card
}) {
  const headerRef = useScrollAnimation(0.1);
  const grid1Ref = useScrollAnimation(0.05);
  const grid2Ref = useScrollAnimation(0.05);
  const reelsRef = useScrollAnimation(0.05);

  const hasReels = reels.length > 0 || landscapeReel;

  return (
    <article className="py-12 md:py-16" dir="rtl">
      {/* Title + tabs — right-aligned */}
      <div
        ref={headerRef}
        className="section-fade flex flex-col items-end gap-4 px-7 md:px-10 lg:px-14 mb-8"
      >
        <h2
          className="font-tajawal font-extrabold text-white capitalize"
          style={{ fontSize: 'clamp(22px, 3vw, 40px)' }}
        >
          {title}
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-end">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className="flex items-center gap-2 px-4 py-2 rounded-[37px] bg-on-section cursor-default select-none"
              role="status"
              aria-label={tab.label}
            >
              <span
                className="font-tajawal font-medium"
                style={{ fontSize: 'clamp(14px, 1.4vw, 20px)', color: '#636363' }}
              >
                {tab.label}
              </span>
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: tab.dotColor }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image grid 1 */}
      {postsImage1 && (
        <div ref={grid1Ref} className="section-fade px-7 mb-4">
          <img
            src={postsImage1}
            alt={postsImage1Alt}
            className="w-full h-auto rounded-2xl object-contain"
            loading="lazy"
          />
        </div>
      )}

      {/* Image grid 2 — optional */}
      {postsImage2 && (
        <div ref={grid2Ref} className="section-fade px-7">
          <img
            src={postsImage2}
            alt={postsImage2Alt}
            className="w-full h-auto rounded-2xl object-contain"
            loading="lazy"
          />
        </div>
      )}

      {/* Reels section */}
      {hasReels && (
        <div ref={reelsRef} className="section-fade mt-10">
          {/* Reels heading — solid + stroke overlay */}
          <div className="relative flex items-center justify-center mb-8 select-none" aria-label="Reels">
            {/* Stroke (outline) layer */}
            <span
              className="absolute font-funnel font-normal pointer-events-none"
              style={{
                fontSize: 'clamp(40px, 6vw, 76px)',
                WebkitTextStroke: '1px #42ae9f',
                color: 'transparent',
                transform: 'translateY(4px)',
              }}
              aria-hidden="true"
            >
              Reels
            </span>
            {/* Solid layer */}
            <span
              className="relative font-funnel font-normal text-on-teal"
              style={{ fontSize: 'clamp(40px, 6vw, 76px)' }}
            >
              Reels
            </span>
          </div>

          {/* Portrait video thumbnails */}
          {reels.length > 0 && (
            <div
              className={`flex justify-center gap-4 px-7 ${
                reels.length === 1 ? '' : 'flex-wrap md:flex-nowrap'
              }`}
            >
              {reels.map((reel, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[24px] shrink-0 group cursor-pointer"
                  style={{
                    width: reels.length === 1 ? 'clamp(180px, 18vw, 230px)' : 'clamp(160px, 20vw, 210px)',
                    aspectRatio: '9/16',
                  }}
                >
                  <img
                    src={reel.thumbnail}
                    alt={reel.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                  <button
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`تشغيل الفيديو ${i + 1}`}
                  >
                    <span className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center transition-all duration-300 group-hover:bg-white/40 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Landscape reel — 16:9, centered */}
          {landscapeReel && (
            <div className="flex justify-center px-7 mt-4">
              <div
                className="relative overflow-hidden rounded-[24px] group cursor-pointer w-full"
                style={{ maxWidth: '570px', aspectRatio: '16/9' }}
              >
                <img
                  src={landscapeReel.thumbnail}
                  alt={landscapeReel.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-300" />
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="تشغيل الفيديو"
                >
                  <span className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center transition-all duration-300 group-hover:bg-white/40 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
