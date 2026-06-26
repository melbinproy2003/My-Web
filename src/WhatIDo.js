import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCode, FiSmartphone, FiCpu, FiCloud } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { num: '01', Icon: FiCode, title: 'Full Stack Development',
    desc: 'Scalable web applications built with Python (Django, FastAPI), React, and Node.js — from database design to polished UI.' },
  { num: '02', Icon: FiSmartphone, title: 'Mobile Development',
    desc: 'Cross-platform mobile apps with Flutter and React Native that deliver native-quality experiences on both iOS and Android.' },
  { num: '03', Icon: FiCpu, title: 'AI Integration',
    desc: 'Building AI-powered products using LangChain, OpenAI API, and TensorFlow — from LLM pipelines to intelligent mobile features.' },
  { num: '04', Icon: FiCloud, title: 'DevOps & Cloud',
    desc: 'Deploying and managing infrastructure on AWS and Azure with Docker, CI/CD pipelines, and cloud-native best practices.' },
];

export default function WhatIDo() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const isInsideIntro = sectionRef.current?.closest('[data-section-intro]');
    if (isInsideIntro) return;

    const ctx = gsap.context(() => {
      const h2 = headerRef.current?.querySelector('h2');
      const divider = headerRef.current?.querySelector('.divider');

      if (h2) {
        gsap.fromTo(h2,
          { opacity: 0, y: 50, rotateX: 15 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } }
        );
      }
      if (divider) {
        gsap.fromTo(divider,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } }
        );
      }

      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 80, rotateY: 15, scale: 0.85, transformPerspective: 800 },
          {
            opacity: 1, y: 0, rotateY: 0, scale: 1,
            duration: 0.8, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
          }
        );
      }

      const icons = cardsRef.current?.querySelectorAll('.service-icon-wrap');
      if (icons) {
        gsap.fromTo(icons,
          { opacity: 0, rotate: -180, scale: 0 },
          {
            opacity: 1, rotate: 0, scale: 1,
            duration: 0.6, stagger: 0.15, ease: 'back.out(2)',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 78%', toggleActions: 'play none none reverse' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-[46px] border-t border-black/30 max-md:block max-md:pt-[92px]">
          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink">
            What I <span className="text-ink-muted">Do</span>
          </h2>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>
      </div>

      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-4 gap-[14px] max-lg:grid-cols-2 max-md:grid-cols-1" ref={cardsRef}>
          {SERVICES.map(({ num, Icon, title, desc }) => (
            <div key={num} className="group service-card border border-black/15 rounded bg-surface/64 p-6 min-h-[270px] transition-all duration-[180ms] ease-[ease] hover:-translate-y-1 hover:border-black/30 hover:shadow-card-hover">
              <span className="block text-ink-muted text-[0.82rem] font-black mb-[22px]">{num}</span>
              <div className="service-icon-wrap w-[44px] h-[44px] grid place-items-center mb-[18px] border border-black/15 rounded-full text-ink transition-all duration-300 ease-[ease] group-hover:rotate-[15deg] group-hover:scale-110 group-hover:border-surface-strong group-hover:bg-surface-strong group-hover:text-surface">
                <Icon size={28} />
              </div>
              <h3 className="text-ink text-[1.05rem] leading-[1.2] mb-[10px]">{title}</h3>
              <p className="text-ink-soft text-[0.9rem] leading-[1.65]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
