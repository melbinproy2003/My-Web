import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { target: 2, suffix: '+', label: 'Years Exp.' },
  { target: 5, suffix: '+', label: 'Projects' },
  { target: 15, suffix: '+', label: 'Technologies' },
];

const TECH_CATEGORIES = [
  { label: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'Backend', items: ['Python', 'Django', 'FastAPI', 'Node.js'] },
  { label: 'Mobile', items: ['Flutter', 'React Native'] },
  { label: 'AI / ML', items: ['LangChain', 'OpenAI API', 'TensorFlow'] },
  { label: 'DevOps', items: ['Docker', 'AWS', 'Azure'] },
];

function Counter({ target, suffix, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 1.6,
      ease: 'easeOut',
      delay,
    });
    return controls.stop;
  }, [inView, count, target, delay]);

  return (
    <div ref={ref} className="stat-box border border-black/15 rounded bg-surface/64 p-[18px] transition-[transform,border-color,box-shadow] duration-[180ms] ease-[ease] hover:-translate-y-1 hover:border-black/30 hover:shadow-card-hover">
      <span className="block text-[2.2rem] font-black leading-[1] text-ink">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
      <span className="block mt-[7px] text-ink-muted text-xs font-extrabold uppercase tracking-[0.08em]">{label}</span>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const techRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const isInsideIntro = sectionRef.current?.closest('[data-section-intro]');
    if (isInsideIntro) return;

    const ctx = gsap.context(() => {
      const h2 = headerRef.current?.querySelector('h2');
      const divider = headerRef.current?.querySelector('.divider');

      if (h2) {
        gsap.fromTo(h2,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } }
        );
      }
      if (divider) {
        gsap.fromTo(divider,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 78%', toggleActions: 'play none none reverse' } }
        );
      }

      const paragraphs = textRef.current?.querySelectorAll('h3, p');
      if (paragraphs) {
        gsap.fromTo(paragraphs,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.7, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: textRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      }

      const statBoxes = statsRef.current?.querySelectorAll('.stat-box');
      if (statBoxes) {
        gsap.fromTo(statBoxes,
          { opacity: 0, scale: 0.6, y: 30 },
          {
            opacity: 1, scale: 1, y: 0,
            duration: 0.6, stagger: 0.12, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      }

      const pills = techRef.current?.querySelectorAll('.tech-pill');
      if (pills) {
        gsap.fromTo(pills,
          { opacity: 0, x: -20, scale: 0.8 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 0.4, stagger: 0.04, ease: 'power2.out',
            scrollTrigger: { trigger: techRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      }

      const btn = sectionRef.current?.querySelector('.btn-green');
      if (btn) {
        gsap.fromTo(btn,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { trigger: btn, start: 'top 90%', toggleActions: 'play none none reverse' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-[46px] border-t border-black/30 max-md:block max-md:pt-[92px]">
          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink">
            About <span className="text-ink-muted">Me</span>
          </h2>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>
      </div>

      <div className="max-w-content mx-auto grid grid-cols-[1.1fr_0.9fr] gap-14 items-start max-lg:grid-cols-1 max-lg:gap-10">
        <div ref={textRef}>
          <h3 className="text-[clamp(1.8rem,4vw,4rem)] leading-[1] tracking-[0] text-ink mb-[22px]">
            Junior AI Engineer &amp; <span className="text-ink-muted">Full Stack Developer</span>
          </h3>
          <p className="text-ink-soft text-base leading-[1.75] mb-4">
            I'm Melbin P Roy — a Full Stack and Mobile Developer currently working as a
            Junior AI Engineer at Phi-Intelligence. With a solid foundation in Python-based
            backends, modern frontend frameworks, and cross-platform mobile development,
            I build complete products end-to-end.
          </p>
          <p className="text-ink-soft text-base leading-[1.75] mb-4">
            I'm passionate about integrating AI into real-world applications — working with
            LangChain, TensorFlow, and OpenAI API — while continuously expanding my expertise
            in DevOps and Cybersecurity.
          </p>

          <a href="#contact" className="btn-green inline-flex items-center justify-center gap-2 min-h-[42px] px-4 border border-black/30 rounded-full text-surface no-underline text-sm font-[750] bg-surface-strong transition-[background,color,border-color,transform] duration-[180ms] ease-[ease] hover:bg-surface-strong hover:border-surface-strong hover:text-surface hover:-translate-y-px mt-6">
            Let's Connect
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-3 gap-[10px] mb-0 mx-0 mt-0 max-md:grid-cols-1" ref={statsRef}>
            {STATS.map((s, i) => (
              <Counter
                key={s.label}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
                delay={0.2 + i * 0.1}
              />
            ))}
          </div>

          <div className="grid gap-3 mb-[30px]" ref={techRef}>
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.label} className="grid grid-cols-[120px_minmax(0,1fr)] gap-[14px] items-start pb-3 border-b border-black/15 max-md:grid-cols-1">
                <span className="text-ink-muted text-xs font-extrabold uppercase tracking-[0.08em]">{cat.label}</span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-pill inline-flex items-center gap-[6px] min-h-[28px] px-[10px] border border-black/15 rounded-full bg-white/35 text-ink-soft text-xs font-extrabold">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
