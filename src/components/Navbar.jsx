import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'الرئيسية', to: '/', hash: '#home', isRoute: true },
  { label: 'عنّا', to: '/#about', hash: '#about', isRoute: false },
  { label: 'الخدمات', to: '/services', hash: null, isRoute: true },
  { label: 'معرض الأعمال', to: '/portfolio', hash: null, isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isPortfolio = location.pathname === '/portfolio';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isServices = location.pathname === '/services';
  const isHealthOrSub = location.pathname.startsWith('/health');
  const isRealEstate = location.pathname.startsWith('/real-estate');
  const isEducation = location.pathname.startsWith('/education');
  const isTech = location.pathname.startsWith('/tech');
  const isInfluence = location.pathname.startsWith('/influence');
  const isCars = location.pathname.startsWith('/cars');
  const isFinance = location.pathname.startsWith('/finance');
  const isOthers = location.pathname.startsWith('/others');

  const isActive = (link) => {
    if (link.to === '/portfolio') return isPortfolio || isHealthOrSub || isRealEstate || isEducation || isTech || isInfluence || isCars || isFinance || isOthers;
    if (link.to === '/services') return isServices;
    if (link.to === '/') return location.pathname === '/' && !isPortfolio && !isServices && !isHealthOrSub;
    return false;
  };

  const handleHashLink = (e, link) => {
    if (!link.isRoute && link.hash) {
      if (location.pathname === '/') {
        // Already on home page — smooth scroll
        e.preventDefault();
        const el = document.querySelector(link.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      // If not on home page, let the Link navigate to /#hash naturally
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={`flex items-center justify-between h-[87px] px-6 md:px-10 lg:px-14 backdrop-blur-[12.5px] transition-all duration-300 ${
          scrolled
            ? 'bg-on-darker/80 shadow-lg shadow-black/30'
            : 'bg-[rgba(28,30,30,0.56)]'
        }`}
      >
        {/* Logo — rightmost in RTL (first child) */}
        <Link to="/" className="flex-shrink-0" aria-label="ON Digital Solutions">
          <img
            src="/assets/logo.svg"
            alt="ON Digital Solutions"
            className="h-[55px] w-auto"
          />
        </Link>

        {/* Nav links — center */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={(e) => handleHashLink(e, link)}
                  className={`font-tajawal text-[18px] lg:text-[20px] font-medium uppercase transition-colors duration-200 hover:text-on-teal ${
                    active ? 'text-on-teal font-extrabold' : 'text-text-nav'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact Us button — leftmost in RTL (last child) */}
        <Link
          to="/#contact"
          className="hidden md:flex items-center justify-center px-6 py-2 bg-white rounded-full font-vietnam font-normal text-[18px] lg:text-[20px] text-on-darker hover:bg-on-teal hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Contact Us
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-on-darker/95 backdrop-blur-md ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-5">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleHashLink(e, link)}
                className={`font-tajawal text-lg transition-colors ${
                  active ? 'text-on-teal' : 'text-text-nav hover:text-on-teal'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/#contact"
            className="w-fit px-5 py-2 bg-white rounded-full font-vietnam text-on-darker text-sm hover:bg-on-teal hover:text-white transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
