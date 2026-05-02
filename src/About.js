import { motion } from 'framer-motion';
import profileImg from './Images/My photo(2).jpg';

const STATS = [
  { value: '2+',  label: 'Years Exp.' },
  { value: '5+',  label: 'Projects' },
  { value: '15+', label: 'Technologies' },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span>Me</span>
        </motion.h2>
        <div className="divider" />
      </div>

      <div className="about-grid">
        {/* ── Image ── */}
        <motion.div
          className="about-img-wrap"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={profileImg} alt="Melbin P Roy" className="about-photo" />
          <div className="about-img-frame" />
        </motion.div>

        {/* ── Text ── */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <h3>
            Junior AI Engineer &amp; <span>Full Stack Developer</span>
          </h3>
          <p>
            I'm Melbin P Roy — a Full Stack and Mobile Developer currently working as a
            Junior AI Engineer at Phi-Intelligence. With a solid foundation in Python-based
            backends, modern frontend frameworks, and cross-platform mobile development,
            I build complete products end-to-end.
          </p>
          <p>
            I'm passionate about integrating AI into real-world applications — working with
            LangChain, TensorFlow, and OpenAI API — while continuously expanding my expertise
            in DevOps and Cybersecurity.
          </p>

          <div className="about-stats">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="btn btn-green"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
