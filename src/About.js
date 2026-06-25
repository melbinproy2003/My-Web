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
    <div ref={ref} className="stat-box">
      <span className="stat-value">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
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
    const ctx = gsap.context(() => {
      // Header slide in
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

      // Text content — slide up with stagger
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

      // Stats — scale up with bounce
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

      // Tech pills — stagger from left
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

      // CTA button
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
    <section id="about" ref={sectionRef}>
      <div className="section-header" ref={headerRef}>
        <h2 style={{ opacity: 0 }}>
          About <span>Me</span>
        </h2>
        <div className="divider" style={{ transform: 'scaleX(0)' }} />
      </div>

      <div className="about-grid">
        <div className="about-text" ref={textRef}>
          <h3 style={{ opacity: 0 }}>
            Junior AI Engineer &amp; <span>Full Stack Developer</span>
          </h3>
          <p style={{ opacity: 0 }}>
            I'm Melbin P Roy — a Full Stack and Mobile Developer currently working as a
            Junior AI Engineer at Phi-Intelligence. With a solid foundation in Python-based
            backends, modern frontend frameworks, and cross-platform mobile development,
            I build complete products end-to-end.
          </p>
          <p style={{ opacity: 0 }}>
            I'm passionate about integrating AI into real-world applications — working with
            LangChain, TensorFlow, and OpenAI API — while continuously expanding my expertise
            in DevOps and Cybersecurity.
          </p>

          <a href="#contact" className="btn btn-green" style={{ opacity: 0, marginTop: '24px' }}>
            Let's Connect
          </a>
        </div>

        <div className="about-details">
          <div className="about-stats" ref={statsRef}>
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

          <div className="about-tech" ref={techRef}>
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.label} className="tech-row">
                <span className="tech-cat-label">{cat.label}</span>
                <div className="tech-pills">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-pill" style={{ opacity: 0 }}>{item}</span>
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
