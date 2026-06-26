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
    <div className="inline-flex items-center gap-[10px] min-h-[48px] px-4 border border-black/15 rounded-full bg-surface/66 text-ink whitespace-nowrap">
      {skill.icon && !error ? (
        <img
          src={`https://skillicons.dev/icons?i=${skill.icon}`}
          alt={skill.name}
          className="w-6 h-6"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-6 h-6 grid place-items-center rounded-full bg-surface-strong text-surface text-[0.72rem] font-black">{skill.name.charAt(0)}</div>
      )}
      <span className="text-ink-soft text-sm font-[750]">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const isInsideIntro = sectionRef.current?.closest('[data-section-intro]');
    if (isInsideIntro) return;

    const ctx = gsap.context(() => {
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
    <section id="skills" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-[46px] border-t border-black/30 max-md:block max-md:pt-[92px]">
          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink">
            My <span className="text-ink-muted">Skills</span>
          </h2>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>
      </div>

      <div className="max-w-content mx-auto flex flex-col gap-4 overflow-hidden mask-edges" ref={marqueeRef}>
        <div className="marquee-track-wrap overflow-hidden">
          <div className="marquee-track flex w-max gap-3 animate-marquee-left hover:[animation-play-state:paused]">
            {[...row1, ...row1].map((skill, i) => (
              <SkillPill key={`r1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        <div className="marquee-track-wrap overflow-hidden">
          <div className="marquee-track flex w-max gap-3 animate-marquee-right hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((skill, i) => (
              <SkillPill key={`r2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
