import { motion } from 'framer-motion';
import { achievements } from './updates';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications &amp; <span>Achievements</span>
        </motion.h2>
        <div className="divider" />
      </div>

      <div className="achievements-wrap">
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              className="cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img src={a.image} alt={a.title} className="cert-img" />
              <div className="cert-info">
                <p className="cert-title">{a.title}</p>
                <p className="cert-issuer">{a.issuer}</p>
                <p className="cert-date">{a.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
