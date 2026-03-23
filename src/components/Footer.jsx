import { useScrollAnimation } from '../hooks/useScrollAnimation';

const socialLinks = ['Instagram', 'Facebook', 'Linkedin'];
const navLinks = ['About Us', 'Services', 'Portfolio'];
const contactInfo = [
  { label: 'Doha, QATAR', href: null },
  { label: 'on@oninfo.net', href: 'mailto:on@oninfo.net', underline: true },
  { label: '0097477745919', href: 'tel:0097477745919' },
  { label: '01014348369', href: 'tel:01014348369' },
];

export default function Footer() {
  const ref = useScrollAnimation(0.1);

  return (
    <footer className="bg-on-section" aria-label="التذييل">
      {/* Giant brand name */}
      <div className="overflow-hidden px-4 md:px-8 pt-12 pb-4">
        <h2
          className="font-funnel font-medium text-[#cecece] leading-none select-none whitespace-nowrap"
          style={{ fontSize: 'clamp(36px, 8vw, 115px)' }}
          aria-label="ON Digital Solutions"
        >
          ON DIGITAL SOLUTIONS
        </h2>
      </div>

      {/* Footer links row */}
      <div
        ref={ref}
        className="section-fade border-t border-white/10 mt-4"
      >
        {/*
          RTL flex row with justify-between:
          - First child → RIGHT → social links
          - Middle child → CENTER → nav links
          - Last child → LEFT → contact info
        */}
        <div className="flex flex-col md:flex-row justify-between gap-8 px-6 md:px-10 lg:px-14 py-10">

          {/* Social — first → RIGHT in RTL */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((s) => (
              <a
                key={s}
                href={`https://${s.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-funnel text-[17px] font-normal text-text-footer hover:text-on-teal transition-colors"
              >
                {s}
              </a>
            ))}
            <p className="font-funnel text-[14px] text-[#515151] mt-2">
              all rights reserved © 2026
            </p>
          </div>

          {/* Nav links — center */}
          <div className="flex flex-col gap-3">
            {navLinks.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(' ', '-')}`}
                className="font-funnel text-[17px] font-normal text-text-footer hover:text-on-teal transition-colors"
              >
                {n}
              </a>
            ))}
          </div>

          {/* Contact info — last → LEFT in RTL */}
          <div className="flex flex-col gap-2">
            {contactInfo.map((c, i) =>
              c.href ? (
                <a
                  key={i}
                  href={c.href}
                  className={`font-funnel text-[17px] font-normal text-text-footer hover:text-on-teal transition-colors ${c.underline ? 'underline' : ''}`}
                >
                  {c.label}
                </a>
              ) : (
                <span key={i} className="font-funnel text-[17px] font-normal text-text-footer">
                  {c.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
