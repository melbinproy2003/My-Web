import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiAward } from 'react-icons/fi';
import { achievements } from './updates';

function Lightbox({ cert, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-box"
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: 'spring', damping: 22, stiffness: 260 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose}>
          <FiX size={18} />
        </button>
        <img src={cert.image} alt={cert.title} className="lightbox-img" />
        <div className="lightbox-meta">
          <h3>{cert.title}</h3>
          <p>{cert.issuer}</p>
          <span>{cert.date}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements() {
  const [selected, setSelected] = useState(null);

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
        <div className="certs-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              className="cert-glass-card"
              onClick={() => setSelected(a)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="cert-thumb-wrap">
                <img src={a.image} alt={a.title} className="cert-thumb" />
                <div className="cert-thumb-overlay" />
              </div>
              <div className="cert-glass-body">
                <div className="cert-glass-badge">
                  <FiAward size={12} /> Certified
                </div>
                <p className="cert-glass-title">{a.title}</p>
                <p className="cert-glass-issuer">{a.issuer}</p>
                <p className="cert-glass-date">{a.date}</p>
              </div>
              <div className="cert-view-hint">Click to View Certificate</div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <Lightbox cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
