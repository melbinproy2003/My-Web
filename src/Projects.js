import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from './updates';

function ProjectCard({ project, index }) {
  const col = index % 3;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: col * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <img src={project.image} alt={project.title} className="project-img" />
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="project-links-row">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
            >
              <FiGithub size={15} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
            >
              <FiExternalLink size={15} /> Live Demo
            </a>
          )}
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

      <div className="projects-wrap">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
