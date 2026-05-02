import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FiDownload, FiMail } from 'react-icons/fi';
import profileImg from './Images/My photo(2).jpg';
import resume from './Images/Melbin P Roy (Resume).pdf';

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 40 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

export default function Home() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <div className="hero-bg-glow" />
      <div className="hero-grid-lines" />

      <div className="hero-content">
        {/* ── Text side ── */}
        <div>
          <motion.p className="hero-tag" {...fadeUp(0)}>
            Hello, World!
          </motion.p>

          <motion.h1 className="hero-name" {...fadeUp(0.1)}>
            I'm <span>Melbin P Roy</span>
          </motion.h1>

          <motion.div className="hero-typed-row" {...fadeUp(0.2)}>
            <ReactTyped
              strings={[
                'Full Stack Developer',
                'Mobile App Developer',
                'Junior AI Engineer',
                'DevOps Enthusiast',
                'Cybersecurity Learner',
              ]}
              typeSpeed={65}
              backSpeed={45}
              loop
              className="typed-highlight"
            />
          </motion.div>

          <motion.p className="hero-bio" {...fadeUp(0.3)}>
            Full Stack &amp; Mobile Developer currently working as a Junior AI Engineer.
            I build scalable web &amp; mobile apps and integrate AI into real-world products.
            Passionate about DevOps and continuously upskilling in Cybersecurity.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.4)}>
            <a href={resume} download className="btn btn-green">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost" onClick={scrollToContact}>
              <FiMail /> Contact Me
            </a>
          </motion.div>
        </div>

        {/* ── Image side ── */}
        <motion.div
          className="hero-image-side"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="image-ring-wrapper">
            <div className="ring-spinner" />
            <div className="ring-mask" />
            <img src={profileImg} alt="Melbin P Roy" className="profile-photo" />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  );
}
