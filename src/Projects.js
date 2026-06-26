import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from './updates';

gsap.registerPlugin(ScrollTrigger);

function ProjectRow({ project, index, containerRef }) {
  const rowRef = useRef(null);
  const num = String(index + 1).padStart(2, '0');

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    if (el.closest('[data-section-intro]')) return;

    const ctx = gsap.context(() => {
      const fromX = index % 2 === 0 ? -80 : 80;
      const fromRotate = index % 2 === 0 ? -2 : 2;

      gsap.fromTo(el,
        { opacity: 0, x: fromX, rotateZ: fromRotate },
        {
          opacity: 1, x: 0, rotateZ: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const tags = el.querySelectorAll('.tag');
      gsap.fromTo(tags,
        { opacity: 0, scale: 0.7, y: 10 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div className="group grid grid-cols-[minmax(0,1fr)_auto] gap-7 items-center py-[26px] border-b border-black/15 transition-[transform,background] duration-300 ease-[ease] hover:translate-x-2 hover:bg-surface/50 hover:rounded max-md:grid-cols-1" ref={rowRef}>
      <div className="flex gap-6 max-md:flex-col">
        <span className="min-w-[36px] text-ink-muted font-black tabular-nums">{num}</span>
        <div>
          <h3 className="text-[clamp(1.45rem,3vw,2.5rem)] leading-[1] text-ink mb-2">{project.title}</h3>
          <p className="max-w-[650px] mb-3 text-ink-soft text-[0.94rem] leading-[1.6]">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag inline-flex items-center gap-[6px] min-h-[28px] px-[10px] border border-black/15 rounded-full bg-white/35 text-ink-soft text-xs font-extrabold">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 max-md:flex-col max-md:w-full">
        <div className="w-[170px] aspect-[4/3] overflow-hidden border border-black/15 rounded opacity-[0.82] transition-[opacity,transform] duration-300 ease-[ease] group-hover:opacity-100 group-hover:scale-105 max-md:w-full">
          <img src={project.image} alt={project.title} className="w-full h-full block object-cover" />
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] grid place-items-center border border-black/15 rounded-full text-ink no-underline"
            >
              <FiGithub size={20} />
            </a>
          )}
          <span className="w-[42px] h-[42px] grid place-items-center border border-black/15 rounded-full text-ink transition-[transform,background] duration-300 ease-[ease] group-hover:rotate-45 group-hover:bg-surface-strong group-hover:text-surface">
            <FiArrowUpRight size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const isInsideIntro = sectionRef.current?.closest('[data-section-intro]');
    if (isInsideIntro) return;

    const ctx = gsap.context(() => {
      const h2 = headerRef.current?.querySelector('h2');
      const divider = headerRef.current?.querySelector('.divider');

      if (h2) {
        gsap.fromTo(h2,
          { opacity: 0, x: -60 },
          {
            opacity: 1, x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (divider) {
        gsap.fromTo(divider,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="px-6 py-24 max-md:px-[18px] max-md:py-[76px]" ref={sectionRef}>
      <div className="max-w-content mx-auto" ref={headerRef}>
        <div className="flex items-end justify-between gap-6 pt-[130px] mb-[46px] border-t border-black/30 max-md:block max-md:pt-[92px]">
          <h2 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[0] text-ink">
            My <span className="text-ink-muted">Projects</span>
          </h2>
          <div className="divider w-[110px] h-px bg-black/30 max-md:mt-[18px]" />
        </div>
      </div>

      <div className="max-w-content mx-auto border-t border-black/30">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} containerRef={sectionRef} />
        ))}
      </div>
    </section>
  );
}
