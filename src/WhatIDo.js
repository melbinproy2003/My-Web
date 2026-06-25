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
    const ctx = gsap.context(() => {
      // Header
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

      // Cards — 3D flip-in with stagger
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

      // Icon wraps spin in
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
    <section id="services" ref={sectionRef}>
      <div className="section-header" ref={headerRef}>
        <h2 style={{ opacity: 0 }}>
          What I <span>Do</span>
        </h2>
        <div className="divider" style={{ transform: 'scaleX(0)' }} />
      </div>

      <div className="services-wrap">
        <div className="services-grid" ref={cardsRef}>
          {SERVICES.map(({ num, Icon, title, desc }) => (
            <div key={num} className="service-card" style={{ opacity: 0 }}>
              <span className="service-num">{num}</span>
              <div className="service-icon-wrap" style={{ opacity: 0 }}>
                <Icon size={28} />
              </div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
