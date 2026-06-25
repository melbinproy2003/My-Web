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

    const ctx = gsap.context(() => {
      // Each row slides in from alternating sides with rotation
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

      // Stagger tags
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
    <div className="proj-row" ref={rowRef} style={{ opacity: 0 }}>
      <div className="proj-row-left">
        <span className="proj-row-num">{num}</span>
        <div className="proj-row-info">
          <h3 className="proj-row-title">{project.title}</h3>
          <p className="proj-row-desc">{project.description}</p>
          <div className="proj-row-tags">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="proj-row-right">
        <div className="proj-thumb">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="proj-row-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-icon-link"
            >
              <FiGithub size={20} />
            </a>
          )}
          <span className="proj-arrow">
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
    const ctx = gsap.context(() => {
      // Section header — horizontal line wipe + text slide
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
    <section id="projects" ref={sectionRef}>
      <div className="section-header" ref={headerRef}>
        <h2 style={{ opacity: 0 }}>
          My <span>Projects</span>
        </h2>
        <div className="divider" style={{ transform: 'scaleX(0)' }} />
      </div>

      <div className="projects-list-wrap">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} containerRef={sectionRef} />
        ))}
      </div>
    </section>
  );
}
