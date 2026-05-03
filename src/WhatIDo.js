import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCpu, FiCloud } from 'react-icons/fi';

const SERVICES = [
  {
    num: '01',
    Icon: FiCode,
    title: 'Full Stack Development',
    desc: 'Scalable web applications built with Python (Django, FastAPI), React, and Node.js — from database design to polished UI.',
  },
  {
    num: '02',
    Icon: FiSmartphone,
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps with Flutter and React Native that deliver native-quality experiences on both iOS and Android.',
  },
  {
    num: '03',
    Icon: FiCpu,
    title: 'AI Integration',
    desc: 'Building AI-powered products using LangChain, OpenAI API, and TensorFlow — from LLM pipelines to intelligent mobile features.',
  },
  {
    num: '04',
    Icon: FiCloud,
    title: 'DevOps & Cloud',
    desc: 'Deploying and managing infrastructure on AWS and Azure with Docker, CI/CD pipelines, and cloud-native best practices.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhatIDo() {
  return (
    <section id="services">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I <span>Do</span>
        </motion.h2>
        <div className="divider" />
      </div>

      <div className="services-wrap">
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map(({ num, Icon, title, desc }) => (
            <motion.div key={num} className="service-card" variants={cardVariants} whileHover={{ y: -5 }}>
              <span className="service-num">{num}</span>
              <div className="service-icon-wrap">
                <Icon size={28} />
              </div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
