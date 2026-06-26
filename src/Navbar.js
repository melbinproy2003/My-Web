import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FiMenu, FiX } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NAV_LINKS = [
  { label: 'Works', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observers = [];

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${section.id}`);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 110 },
        duration: 1,
        ease: 'power3.inOut',
      });
    }
  }, []);

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-surface-strong origin-left z-[1002]" style={{ scaleX: scrollYProgress }} />

      <nav className={`fixed top-[18px] left-0 right-0 z-[1000] px-6 pointer-events-none max-md:top-3 max-md:px-[14px]`} ref={navRef} style={{ opacity: 0 }}>
        <div className="w-full max-w-content mx-auto flex items-center justify-between gap-4 pointer-events-auto">
          <div>
            <a href="#home" className="inline-flex min-h-[42px] items-center px-4 rounded-full text-ink no-underline text-sm font-bold bg-surface/78 border border-black/15 shadow-nav backdrop-blur-lg" onClick={(e) => handleNavClick(e, '#home')}>
              Melbin P Roy
            </a>
          </div>

          <ul className="flex items-center gap-1 list-none min-h-[42px] p-1 rounded-full bg-surface/78 border border-black/15 shadow-nav backdrop-blur-lg max-md:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`inline-flex min-h-[32px] items-center px-[14px] rounded-full text-ink-soft no-underline text-[0.84rem] font-[650] transition-[background,color] duration-[180ms] ease-[ease] hover:bg-surface-strong hover:text-surface ${activeSection === link.href ? 'bg-surface-strong text-surface' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="hidden max-md:flex w-[42px] h-[42px] items-center justify-center rounded-full text-ink cursor-pointer bg-surface/78 border border-black/15 shadow-nav backdrop-blur-lg"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="w-[min(1180px,calc(100%-48px))] mx-auto mt-[10px] overflow-hidden border border-black/15 rounded-[8px] bg-surface/94 shadow-card pointer-events-auto"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="block px-[18px] py-[14px] text-ink no-underline text-[0.95rem] font-bold border-b border-black/15 last:border-b-0" onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {scrolled && (
          <motion.button
            className="fixed right-6 bottom-6 z-[999] min-w-[44px] h-[44px] border border-black/15 rounded-full bg-surface-strong text-surface cursor-pointer text-sm font-extrabold grid place-items-center transition-transform duration-200 hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
