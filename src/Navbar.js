import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#achievements' },
  { label: 'Contact',        href: '#contact' },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.35 }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <motion.a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleLink(e, '#home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Melbin<span>.</span>
          </motion.a>

          <motion.ul
            className="nav-links"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href.slice(1) ? 'active' : ''}
                  onClick={(e) => handleLink(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>

          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                >
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
            className="scroll-top-btn"
            onClick={() => scrollTo('#home')}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
