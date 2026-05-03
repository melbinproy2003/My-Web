import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from './Images/My photo(2).jpg';

const STATS = [
  { target: 2,  suffix: '+', label: 'Years Exp.' },
  { target: 5,  suffix: '+', label: 'Projects' },
  { target: 15, suffix: '+', label: 'Technologies' },
];

const TECH_CATEGORIES = [
  { label: 'Frontend',  items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'Backend',   items: ['Python', 'Django', 'FastAPI', 'Node.js'] },
  { label: 'Mobile',    items: ['Flutter', 'React Native'] },
  { label: 'AI / ML',   items: ['LangChain', 'OpenAI API', 'TensorFlow'] },
  { label: 'DevOps',    items: ['Docker', 'AWS', 'Azure'] },
];

function Counter({ target, suffix, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 1.6,
      ease: 'easeOut',
      delay,
    });
    return controls.stop;
  }, [inView, count, target, delay]);

  return (
    <motion.div
      ref={ref}
      className="stat-box"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <span className="stat-value">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

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

          {/* ── Stats ── */}
          <div className="about-stats">
            {STATS.map((s, i) => (
              <Counter
                key={s.label}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
                delay={0.2 + i * 0.1}
              />
            ))}
          </div>

          {/* ── Tech stack ── */}
          <motion.div
            className="about-tech"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.label} className="tech-row">
                <span className="tech-cat-label">{cat.label}</span>
                <div className="tech-pills">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <Link to="/contact" className="btn btn-green">
            Let's Connect
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
