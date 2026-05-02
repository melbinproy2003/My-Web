import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import { experience } from './updates';

function ExpCard({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`exp-row ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className={`timeline-dot${item.current ? ' current' : ''}`} />
      <div className="exp-card">
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
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="experience">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience &amp; <span>Education</span>
        </motion.h2>
        <div className="divider" />
      </div>

      <div className="experience-wrap">
        <div className="timeline-line" />
        {experience.map((item, i) => (
          <ExpCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
