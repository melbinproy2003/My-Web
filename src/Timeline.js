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
    if (el.closest('[data-section-intro]')) return;

    const ctx = gsap.context(() => {
      const isLeft = index % 2 === 0;

      gsap.fromTo(el.querySelector('.exp-card'),
        { opacity: 0, x: isLeft ? -60 : 60, scale: 0.92 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );

      const dot = el.querySelector('.timeline-dot');
      if (dot) {
        gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1, duration: 0.4, ease: 'back.out(3)',
            scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );

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
    <div className="relative block pl-12 pb-[22px] max-md:pl-0 max-md:pb-4" ref={rowRef}>
      <div className="absolute left-0 top-6 w-[25px] flex items-center justify-center max-md:hidden">
        <div className={`timeline-dot w-[13px] h-[13px] rounded-full bg-surface-strong border-[3px] border-bg-primary ${item.current ? '' : ''}`} />
      </div>
      <div className="exp-card border border-black/15 rounded bg-surface/64 p-6">
        <span className="inline-flex items-center gap-[6px] min-h-[28px] px-[10px] border border-black/15 rounded-full bg-white/35 text-ink-soft text-xs font-extrabold">{item.type}</span>
        <h3 className="mt-3 mb-1 text-ink text-xl">{item.role}</h3>
        <p className="text-ink-soft font-extrabold">{item.company}</p>
        <div className="flex flex-wrap items-center gap-2 my-2 mb-[14px] text-ink-muted text-sm font-[750]">
          <FiCalendar size={13} />
          {item.duration}
          {item.current && <span className="inline-flex items-center gap-[6px] min-h-[28px] px-[10px] border border-black/15 rounded-full bg-white/35 text-ink-soft text-xs font-extrabold">● Now</span>}
        </div>
        <ul className="list-none exp-points">
          {item.points.map((pt) => (
              <li key={pt} className="relative pl-[18px] text-ink-soft text-[0.92rem] leading-[1.65] before:content-[''] before:absolute before:left-0 before:top-[0.75em] before:w-[6px] before:h-[6px] before:rounded-full before:bg-ink-muted">{pt}</li>
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
    const isInsideIntro = sectionRef.current?.closest('[data-section-intro]');
    if (isInsideIntro) return;

    const ctx = gsap.context(() => {
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
    <section id="experience" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-[46px] border-t border-black/30 max-md:block max-md:pt-[92px]">
          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink">
            Experience &amp; <span className="text-ink-muted">Education</span>
          </h2>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>
      </div>

      <div className="experience-wrap relative max-w-[980px] mx-auto max-md:max-w-full">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-black/30 max-md:hidden" ref={lineRef} />
        {experience.map((item, i) => (
          <ExpCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
