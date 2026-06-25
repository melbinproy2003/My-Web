import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImg from './Images/image_without_bg.png';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered load-in sequence
      tl.fromTo('.hero-pre', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.hero-title-main', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-subtitle', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
        .fromTo(photoRef.current, { opacity: 0, scale: 0.95, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, '-=0.7')
        .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.7')
        .fromTo(ctaRef.current?.children || [], { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.5')
        .fromTo('.hero-decor-line.horizontal', { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, '-=0.6')
        .fromTo(socialRef.current?.children || [], { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, '-=0.5')
        .fromTo('.hero-float-sidebar', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=1');

      // Parallax scroll on portrait card wrapper
      gsap.to(photoRef.current, {
        y: -45,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Parallax scroll on text column
      gsap.to('.hero-text-col', {
        y: 25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section-new" ref={sectionRef}>
      {/* Decorative vertical running lines for editorial look */}
      <div className="hero-decor-line vertical-left" />
      <div className="hero-decor-line vertical-right" />

      {/* Floating Vertical Margins */}
      <div className="hero-float-sidebar" style={{ opacity: 0 }}>
        <span className="float-logo">M</span>
        <div className="float-label">JUNIOR AI ENGINEER / DEVELOPER</div>
      </div>

      <div className="hero-container">
        <div className="hero-layout-grid">
          {/* Left: Copy & Actions */}
          <div className="hero-text-col">
            <div className="hero-pre" style={{ opacity: 0 }}>
              <div className="availability-pill">
                <span /> Available for new opportunities
              </div>
            </div>

            <h1 className="hero-title-main" style={{ opacity: 0 }}>
              Melbin <br />
              <span>P Roy</span>
            </h1>

            <div className="hero-subtitle" style={{ opacity: 0 }}>
              <div className="subtitle-tag">DESIGNER &amp; BUILDER</div>
              <p className="hero-role-text">Junior AI Engineer at Phi-Intelligence &amp; Full Stack Developer</p>
            </div>

            <p className="hero-description" style={{ opacity: 0 }}>
              I construct scalable web and mobile software, then wire AI models into the parts
              where they make the experience sharper, faster, and more useful. Currently focused
              on React, Python, Django, Flutter, and LangChain.
            </p>

            <div className="hero-actions" ref={ctaRef}>
              <a href="#projects" className="btn btn-green" style={{ opacity: 0 }}>
                Explore Works <FiArrowUpRight size={16} style={{ marginLeft: '4px' }} />
              </a>
              <a href="#contact" className="btn btn-ghost" style={{ opacity: 0 }}>
                Let's Talk
              </a>
            </div>

            <div className="hero-footer-row">
              <div className="hero-decor-line horizontal" style={{ transform: 'scaleX(0)' }} />
              <div className="hero-footer-content">
                {/* Signature */}
                <div className="hero-signature">
                  <svg viewBox="0 0 200 60" width="140" height="42">
                    <path d="M15 35c15-20 25-30 35-10 10 20 20 20 30 0 10-20 20-10 30 5 10 15 20 15 30-10 10-25 20-15 30 5l20 5" 
                          fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* Socials */}
                <div className="hero-socials-wrap" ref={socialRef}>
                  <a href="https://github.com/melbinproy2003" target="_blank" rel="noreferrer" style={{ opacity: 0 }}><FiGithub size={18} /></a>
                  <a href="https://www.linkedin.com/in/melbin-p-roy" target="_blank" rel="noreferrer" style={{ opacity: 0 }}><FiLinkedin size={18} /></a>
                  <a href="mailto:melbinproy76@gmail.com" style={{ opacity: 0 }}><FiMail size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Floating Portrait Card */}
          <div className="hero-photo-col">
            <div className="hero-portrait-wrapper" ref={photoRef} style={{ opacity: 0 }}>
              {/* Outer decorative glow orb */}
              <div className="hero-portrait-glow" />
              {/* Background card frame */}
              <div className="hero-portrait-card">
                <div className="portrait-grid-overlay" />
                <span className="portrait-corner-tag top-left">01</span>
                <span className="portrait-corner-tag bottom-right">HERO</span>
              </div>
              {/* Floating Cutout Image */}
              <img src={profileImg} alt="Melbin P Roy" className="hero-portrait-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
