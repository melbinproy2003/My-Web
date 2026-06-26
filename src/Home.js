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

      tl.fromTo('.hero-title-main', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo('.hero-subtitle', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
        .fromTo(photoRef.current, { opacity: 0, scale: 0.95, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, '-=0.4')
        .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
        .fromTo('.hero-actions > *', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.4')
        .fromTo('.hero-decor-line.horizontal', { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-socials-wrap > *', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, '-=0.4')
        .fromTo('.hero-float-sidebar', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.7');

      gsap.to(photoRef.current, {
        y: -45,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

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
    <section id="home" className="min-h-screen relative flex items-center pt-[130px] pb-20 overflow-hidden max-md:min-h-0 max-md:pt-[100px] max-md:pb-11" ref={sectionRef}>
      <div className="absolute top-0 bottom-0 left-20 w-px bg-black/15 max-lg:hidden" />
      <div className="absolute top-0 bottom-0 right-20 w-px bg-black/15 max-lg:hidden" />

      <div className="absolute top-0 bottom-0 left-0 w-20 flex flex-col items-center justify-between py-14 z-10 max-lg:hidden" style={{ opacity: 0 }}>
        <span className="font-display text-[1.8rem] font-extrabold text-ink">M</span>
        <div className="vertical-rl [writing-mode:vertical-rl] rotate-180 text-[0.65rem] font-extrabold tracking-[0.3em] text-ink-muted uppercase whitespace-nowrap">JUNIOR AI ENGINEER / DEVELOPER</div>
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-[120px] relative z-5 max-lg:px-10 max-md:px-4">
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-20 items-center max-lg:grid-cols-1 max-lg:gap-14">
          <div className="hero-text-col flex flex-col">
            <h1 className="hero-title-main font-display text-[clamp(3rem,5.8vw,5.2rem)] font-black leading-[0.98] tracking-[-0.03em] text-ink my-6 mx-0 max-lg:text-center max-md:text-[3.2rem]" style={{ opacity: 0 }}>
              Melbin <br />
              <span className="text-ink-muted font-light">P Roy</span>
            </h1>

            <div className="hero-subtitle flex flex-col gap-[6px] mb-6 max-lg:items-center max-lg:text-center" style={{ opacity: 0 }}>
              <div className="text-[0.72rem] font-extrabold tracking-[0.2em] text-gold">DESIGNER &amp; BUILDER</div>
              <p className="text-base font-[750] text-ink m-0">Junior AI Engineer at Phi-Intelligence &amp; Full Stack Developer</p>
            </div>

            <p className="hero-description text-base leading-[1.7] text-ink-soft max-w-[580px] mb-0 mx-0 mt-0 max-lg:mx-auto max-lg:text-center" style={{ opacity: 0 }}>
              I construct scalable web and mobile software, then wire AI models into the parts
              where they make the experience sharper, faster, and more useful. Currently focused
              on React, Python, Django, Flutter, and LangChain.
            </p>

            <div className="hero-actions flex flex-wrap gap-4 mb-12 mt-7 max-md:flex-col" ref={ctaRef}>
              <a href="#projects" className="btn inline-flex items-center justify-center gap-2 min-h-[42px] px-4 border border-black/30 rounded-full text-surface no-underline text-sm font-[750] bg-surface-strong transition-[background,color,border-color,transform] duration-[180ms] ease-[ease] hover:bg-surface-strong hover:border-surface-strong hover:text-surface hover:-translate-y-px" style={{ opacity: 0 }}>
                Explore Works <FiArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn inline-flex items-center justify-center gap-2 min-h-[42px] px-4 border border-black/30 rounded-full text-ink no-underline text-sm font-[750] bg-transparent transition-[background,color,border-color,transform] duration-[180ms] ease-[ease] hover:bg-surface-strong hover:border-surface-strong hover:text-surface hover:-translate-y-px" style={{ opacity: 0 }}>
                Let's Talk
              </a>
            </div>

            <div className="relative pt-6">
              <div className="hero-decor-line horizontal absolute top-0 left-0 right-0 h-px bg-black/15 origin-left" style={{ transform: 'scaleX(0)' }} />
              <div className="hero-footer-content flex items-center justify-between max-lg:justify-center">
                <div className="hero-socials-wrap flex gap-5" ref={socialRef}>
                  <a href="https://github.com/melbinproy2003" target="_blank" rel="noreferrer" className="text-ink-muted transition-[color,transform] duration-[180ms] ease-[ease] flex items-center hover:text-gold hover:-translate-y-0.5" style={{ opacity: 0 }}><FiGithub size={18} /></a>
                  <a href="https://www.linkedin.com/in/melbin-p-roy" target="_blank" rel="noreferrer" className="text-ink-muted transition-[color,transform] duration-[180ms] ease-[ease] flex items-center hover:text-gold hover:-translate-y-0.5" style={{ opacity: 0 }}><FiLinkedin size={18} /></a>
                  <a href="mailto:melbinproy76@gmail.com" className="text-ink-muted transition-[color,transform] duration-[180ms] ease-[ease] flex items-center hover:text-gold hover:-translate-y-0.5" style={{ opacity: 0 }}><FiMail size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative max-lg:order-first">
            <div className="group relative w-full max-w-[360px] h-[480px] overflow-visible max-lg:h-[400px] max-lg:max-w-[320px] max-md:h-[340px] max-md:max-w-[270px]" ref={photoRef} style={{ opacity: 0 }}>
              <div className="absolute top-[10%] left-[10%] w-4/5 h-4/5 bg-[radial-gradient(circle,rgba(209,161,83,0.28)_0%,rgba(209,161,83,0)_70%)] blur-xl z-[1] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-surface to-[#ece8dd] rounded-[20px] border border-black/15 shadow-card overflow-hidden z-[2] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] group-hover:-rotate-1 group-hover:shadow-portrait-hover">
                <div className="absolute inset-0 bg-grid-overlay z-[1]" />
                <span className="absolute font-display text-[0.65rem] font-extrabold tracking-[0.1em] text-ink-muted z-[2] top-5 left-5">01</span>
                <span className="absolute font-display text-[0.65rem] font-extrabold tracking-[0.1em] text-ink-muted z-[2] bottom-5 right-5">HERO</span>
              </div>
              <img src={profileImg} alt="Melbin P Roy" className="absolute bottom-[-40px] left-[-5%] w-[110%] h-[145%] object-cover object-bottom z-[3] drop-shadow-[0_16px_32px_rgba(27,26,24,0.22)] [clip-path:inset(-200%_-100%_40px_-100%_round_0_0_20px_20px)] origin-bottom transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
