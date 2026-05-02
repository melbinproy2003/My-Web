import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from './updates';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: 'easeOut' } },
};

function SkillCard({ skill }) {
  const [error, setError] = useState(false);

  return (
    <motion.div className="skill-card" variants={cardVariants} whileHover={{ y: -4 }}>
      {skill.icon && !error ? (
        <img
          className="skill-icon"
          src={`https://skillicons.dev/icons?i=${skill.icon}`}
          alt={skill.name}
          onError={() => setError(true)}
        />
      ) : (
        <div className="skill-fallback">
          {skill.name.charAt(0)}
        </div>
      )}
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active);

  return (
    <section id="skills">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span>Skills</span>
        </motion.h2>
        <div className="divider" />
      </div>

      <div className="skills-wrap">
        <motion.div
          className="tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn${active === cat.id ? ' active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {current.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
