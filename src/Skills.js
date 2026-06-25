import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from './updates';

gsap.registerPlugin(ScrollTrigger);

const allSkills = skillCategories.flatMap((c) => c.skills);
const row1 = allSkills;
const row2 = [...allSkills].reverse();

function SkillPill({ skill }) {
  const [error, setError] = useState(false);
  return (
    <div className="skill-pill">
      {skill.icon && !error ? (
        <img
          src={`https://skillicons.dev/icons?i=${skill.icon}`}
          alt={skill.name}
          className="skill-pill-icon"
          onError={() => setError(true)}
        />
      ) : (
        <div className="skill-pill-fallback">{skill.name.charAt(0)}</div>
      )}
      <span className="skill-pill-name">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      const h2 = headerRef.current?.querySelector('h2');
      const divider = headerRef.current?.querySelector('.divider');

      if (h2) {
        gsap.fromTo(h2,
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } }
        );
      }
      if (divider) {
        gsap.fromTo(divider,
          { scaleX: 0, transformOrigin: 'right center' },
          { scaleX: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: headerRef.current, start: 'top 78%', toggleActions: 'play none none reverse' } }
        );
      }

      // Marquee rows scale up from zero height
      const tracks = marqueeRef.current?.querySelectorAll('.marquee-track-wrap');
      if (tracks) {
        gsap.fromTo(tracks,
          { opacity: 0, scaleY: 0, transformOrigin: 'center center' },
          {
            opacity: 1, scaleY: 1,
            duration: 0.7, stagger: 0.2, ease: 'power3.out',
            scrollTrigger: { trigger: marqueeRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );
      }

      // Scroll-linked marquee speed boost
      const leftTrack = marqueeRef.current?.querySelector('.marquee-left');
      const rightTrack = marqueeRef.current?.querySelector('.marquee-right');

      if (leftTrack && rightTrack) {
        gsap.to(leftTrack, {
          x: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
        gsap.to(rightTrack, {
          x: 100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header" ref={headerRef}>
        <h2 style={{ opacity: 0 }}>
          My <span>Skills</span>
        </h2>
        <div className="divider" style={{ transform: 'scaleX(0)' }} />
      </div>

      <div className="marquee-wrapper" ref={marqueeRef}>
        <div className="marquee-track-wrap" style={{ opacity: 0 }}>
          <div className="marquee-track marquee-left">
            {[...row1, ...row1].map((skill, i) => (
              <SkillPill key={`r1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        <div className="marquee-track-wrap" style={{ opacity: 0 }}>
          <div className="marquee-track marquee-right">
            {[...row2, ...row2].map((skill, i) => (
              <SkillPill key={`r2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
