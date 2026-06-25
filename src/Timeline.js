import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCalendar } from 'react-icons/fi';
import { experience } from './updates';

gsap.registerPlugin(ScrollTrigger);

function ExpCard({ item, index }) {
  const rowRef = useRef(null);
  const { current } = item;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const isLeft = index % 2 === 0;

      // Card slides in from alternating sides
      gsap.fromTo(el.querySelector('.exp-card'),
        { opacity: 0, x: isLeft ? -60 : 60, scale: 0.92 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );

      // Dot — scale pop
      const dot = el.querySelector('.timeline-dot');
      if (dot) {
        gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1, duration: 0.4, ease: 'back.out(3)',
            scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );

        // Pulse animation for current job
        if (current) {
          gsap.to(dot, {
            boxShadow: '0 0 0 8px rgba(68, 185, 108, 0.3)',
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut',
          });
        }
      }

      // List items stagger
      const listItems = el.querySelectorAll('.exp-points li');
      if (listItems.length) {
        gsap.fromTo(listItems,
          { opacity: 0, x: 15 },
          {
            opacity: 1, x: 0,
            duration: 0.4, stagger: 0.08, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [index, current]);

  return (
    <div className={`exp-row ${index % 2 === 0 ? 'left' : 'right'}`} ref={rowRef}>
      <div className="timeline-dot-wrap">
        <div className={`timeline-dot${item.current ? ' current' : ''}`} style={{ transform: 'scale(0)' }} />
      </div>
      <div className="exp-card" style={{ opacity: 0 }}>
        <span className="exp-type">{item.type}</span>
        <h3>{item.role}</h3>
        <p className="exp-company">{item.company}</p>
        <div className="exp-duration">
          <FiCalendar size={13} />
          {item.duration}
          {item.current && <span className="current-badge">● Now</span>}
        </div>
        <ul className="exp-points">
          {item.points.map((pt) => (
            <li key={pt} style={{ opacity: 0 }}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Timeline() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      const h2 = headerRef.current?.querySelector('h2');
      const divider = headerRef.current?.querySelector('.divider');

      if (h2) {
        gsap.fromTo(h2,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
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

      // Progressive timeline line draw
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector('.experience-wrap'),
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="section-header" ref={headerRef}>
        <h2 style={{ opacity: 0 }}>
          Experience &amp; <span>Education</span>
        </h2>
        <div className="divider" style={{ transform: 'scaleX(0)' }} />
      </div>

      <div className="experience-wrap">
        <div className="timeline-line" ref={lineRef} style={{ transform: 'scaleY(0)' }} />
        {experience.map((item, i) => (
          <ExpCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
