import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from './updates';

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

      <motion.div
        className="marquee-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="marquee-track-wrap">
          <div className="marquee-track marquee-left">
            {[...row1, ...row1].map((skill, i) => (
              <SkillPill key={`r1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        <div className="marquee-track-wrap">
          <div className="marquee-track marquee-right">
            {[...row2, ...row2].map((skill, i) => (
              <SkillPill key={`r2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
