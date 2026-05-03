import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from './updates';

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className={`proj-row${hovered ? ' proj-row--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
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
        <div className={`proj-thumb${hovered ? ' proj-thumb--visible' : ''}`}>
          <img src={project.image} alt={project.title} />
        </div>
        <div className="proj-row-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-icon-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={20} />
            </a>
          )}
          <span className={`proj-arrow${hovered ? ' proj-arrow--active' : ''}`}>
            <FiArrowUpRight size={24} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span>Projects</span>
        </motion.h2>
        <div className="divider" />
      </div>

      <div className="projects-list-wrap">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
